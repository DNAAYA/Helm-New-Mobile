import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, LoadingController, NavController, Platform, ToastController } from '@ionic/angular';
import { Question } from '../models/question';
import { DatabaseService } from '../services/database.service';
import { ActionSheetController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/File/ngx';
import { HttpClient } from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/Camera/ngx';
 import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { AuditQuestion } from '../models/auditQuestion';
// const STORAGE_KEY = 'my_images';

import { AngularFireDatabase } from '@angular/fire/compat/database';


@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.page.html',
  styleUrls: ['./question-details.page.scss'],
})
export class QuestionDetailsPage implements OnInit {
  database = this.db.database.app.database('https://helm-8734b-4d96d.firebaseio.com/');  
  question: AuditQuestion;
  questionID: string;
  saved = false;
  images = [];
  STORAGE_KEY: string;
  questionNote: string;
  type: any;
  auditKey: any;
  base64Image: string;
  downloadURL: any;
  savedImages: any[];
  divID: any;

  constructor(
    private db: AngularFireDatabase,
    public alertController: AlertController, 
    public actionSheetCtrl: ActionSheetController, 
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private dbService: DatabaseService,
    private camera: Camera, 
    private file: File, 
    private webview: WebView,
    private toastController: ToastController,
    private storage: Storage, 
    private plt: Platform, 
    private loadingController: LoadingController,
    private ref: ChangeDetectorRef, 
    private filePath: FilePath,
    private fbStorage: AngularFireStorage
    ) {

     }

  ngOnInit() {
    this.questionID = this.activatedRoute.snapshot.params['qID'];
    this.divID = this.activatedRoute.snapshot.params['divID'];
    this.auditKey = this.activatedRoute.snapshot.params['auditKey'];
    this.getQuestion();
  }

  async getQuestion() {
    // get audit question
    this.storage.get(`auditQuestions-${this.auditKey}-${this.divID}`).then( (questions: AuditQuestion[]) => {
      this.question = new AuditQuestion(questions.find( q => q.id === this.questionID))
      if(this.question['note']) {
        this.questionNote = this.question['note']
      }
      console.log('audit question >>', this.question)
      this.STORAGE_KEY = `images-${this.questionID}`
      this.loadStoredImages();
    })
    /* await this.dbService.getAuditQuestion(this.auditKey, this.questionID).then(((res: AuditQuestion) => {
      console.log('audit question >>', res)
      this.question = res;
      if(res['note']) {
        this.questionNote = res['note']
      }
    })) */
    
  }
  
 async QuestionDetails() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      subHeader: `${this.question?.fullQuestion}`,
      message: `<img src="${this.question.ada_image}"  class="card-image">`,
      buttons: [
         {
          text: 'Close',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
    console.log('request details', )
  }
  
//#TODO: remove image from firebase too 
  deleteImg(imgEntry, position) {
    this.images.splice(position, 1);
 
    this.storage.get(this.STORAGE_KEY).then(images => {
        console.log('local storage....', images)
        let arr = images;
        let filtered = arr.filter(name => name != imgEntry.name);
        this.storage.set(this.STORAGE_KEY, filtered);

        var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
        this.file.removeFile(correctPath, imgEntry.name).then(res => {
            this.presentToast('File removed.');
        });
    });
  }

 /*  base64ToImage(dataURI) {
    const fileDate = dataURI.split(',');
    // const mime = fileDate[0].match(/:(.*?);/)[1];
    const byteString = atob(fileDate[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([arrayBuffer], { type: 'image/png' });
    return blob;
  } */

  async saveNote() {
    this.saved = true
    let loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();
    this.storage.get(`auditQuestions-${this.auditKey}-${this.divID}`).then( (questions: AuditQuestion[]) => {
      var i = questions.indexOf(questions.find( q => q.id === this.questionID))
      console.log(i,questions[i],this.question)
      this.question.note = this.questionNote
      this.question.images = this.images
      questions[i] = this.question
      this.storage.set(`auditQuestions-${this.auditKey}-${this.divID}`, questions).then(()=> loading.dismiss())
    })
    //#TODO: save stored images to firebase
    /* if (this.images.length) {
      await this.images.forEach(async (el,i) => {
        imagesArr.push(el);
        console.log(el)
        const file: any = await fetch(el.url)
        .then(r => r.blob())
        .catch( err => {
          console.log(err)
          //imagesArr.push(el.url);
        });
        console.log(file)
        if (file.type === 'text/html') {
          imagesArr.push(el.url);
        }
        else {
          this.dbService.updateNoteQuestion(this.auditKey, this.questionID, this.questionNote, imagesArr).then((res) => {
            console.log('note addded successfully', res );    
            loading.dismiss();
          })
          const filePath = `capturedImages/${this.auditKey}/${currentDate}`;
          const fileRef = this.fbStorage.ref(filePath);
      
          const task = this.fbStorage.upload(`capturedImages/${this.auditKey}/${currentDate}`, file);
          task.snapshotChanges()
            .pipe(finalize(() => {
              this.downloadURL = fileRef.getDownloadURL();
              this.downloadURL.subscribe(downloadURL => {
                if (downloadURL) {
                  imagesArr.push(downloadURL);
                  console.log('images uploaded successfully', downloadURL)
                }
                console.log(downloadURL);
                if ( imagesArr.length === this.images.length) {
                  this.dbService.updateNoteQuestion(this.auditKey, this.questionID, this.questionNote, imagesArr).then((res) => {
                    loading.dismiss();
                    console.log('note addded successfully', res );
                  })
                }
              });
            })
            )
            .subscribe(url => {
              if (url) {
                console.log('images url >>', imagesArr)
              }
            });
      })
      
    }
    else {
      this.dbService.updateNoteQuestion(this.auditKey, this.questionID, this.questionNote, imagesArr).then((res) => {
        console.log('note addded successfully', res );    
        loading.dismiss();
      })
    } */
  }
  /* async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      cssClass: 'my-custom-class',
      buttons: [
      {
        text: 'Uplaod from gallery',
        icon: 'arrow-up-outline',
        data: 'Data value',
        handler: () => {
          this
          console.log('Gallery Opened !!!!###!!!!');
        }
      }, 
      {
        text: 'Take Photo',
        icon: 'camera-outline',
        handler: () => {

          console.log('Camera Opened !!!!###!!!!');
        }
      }, 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  } */
  

  async saveAlert() {
    console.log('alert popup start')
    let alert = await this.alertController.create({

        header: 'Save before exiting!',
        buttons: [
            {
            text: 'Save',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              this.navCtrl.back()
            }
            },
        ]
    })
    await alert.present();
 }

//  back() {
//     console.log('check saved baaaack', this.saved)
//     if(!this.saved) {
//         console.log('not saved', this.saved)
//        this.saveAlert();
//     } else {
//         console.log('saved ---- #222', this.saved)
//         //this.navCtrl.back();
//     }
//  }




  loadStoredImages() {
    console.log('this.STORAGE_KEY #2', this.STORAGE_KEY)
    this.storage.get(this.STORAGE_KEY).then(images => {
      if (images) {
        let arr = images;
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, url: resPath });
        }
      }
      if (!this.images.length) {
        for (let img of this.question.images) {
          this.images.push({
            path: img,
            url: img
          })
        }
      }
      console.log('this images', this.images)
    })
    
    return this.images;
  }
 
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }
 
  async presentToast(text) {
    const toast = await this.toastController.create({
        message: text,
        position: 'bottom',
        duration: 3000
    });
    toast.present();
  }
  async selectImage() {
      const actionSheet = await this.actionSheetCtrl.create({
          header: "Select Image source",
          buttons: [
              {
                  text: 'Use Camera',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.CAMERA);
                  }
              },
              {
                  text: 'Cancel',
                  role: 'cancel'
              }
          ]
      });
      await actionSheet.present();
  }

  updateStoredImages(name, url) {
    console.log('this.STORAGE_KEY', this.STORAGE_KEY)
    this.storage.get(this.STORAGE_KEY).then(images => {
        let arr = images;
        if (!arr) {
            let newImages = [name];
            this.storage.set(this.STORAGE_KEY, newImages);
        } else {
            arr.push(name);
            this.storage.set(this.STORAGE_KEY, arr);
        }
        let filePath = this.file.dataDirectory + name;
        // let resPath = this.pathForImage(filePath);
        let newEntry = {
            name: name,
            path: url,
            filePath: filePath,
            url: url
        };
        this.images = [newEntry, ...this.images];
        this.ref.detectChanges(); // trigger change detection cycle
    });
  }
// FILE STUFF
  makeFileIntoBlob(_imagePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = "";
      this.file
        .resolveLocalFilesystemUrl(_imagePath)
        .then(fileEntry => {
          let { name, nativeURL } = fileEntry;
          // get the path..
          let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
          console.log("path", path);
          console.log("fileName", name);
          fileName = name;

          // we are provided the name, so now read the file into
          // a buffer
          return this.file.readAsArrayBuffer(path, name);
        })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          let imgBlob = new Blob([buffer], {
            type: "image/jpeg"
          });
          console.log(imgBlob.type, imgBlob.size);
          resolve({
            fileName,
            imgBlob
          });
        })
        .catch(e => reject(e));
    });
  }

// uploadToFirebase(_imageBlobInfo) {
//     console.log("uploadToFirebase");
//     return new Promise((resolve, reject) => {
//       let fileRef = firebase.storage()
//                         .ref("images/" + _imageBlobInfo.fileName);
//       let uploadTask = fileRef.put(_imageBlobInfo.imgBlob);
//       uploadTask.on(
//         "state_changed",
//         (_snap: any) => {
//           console.log(
//             "progess " +
//               (_snap.bytesTransferred / _snap.totalBytes) * 100
//           );
//         },
//         _error => {
//           console.log(_error);
//           reject(_error);
//         },
//         () => {
//           // completion...
//           resolve(uploadTask.snapshot);
//         }
//       );
//     });
//   }

  async takePicture(sourceType: PictureSourceType) {
   /*  var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
 
    this.camera.getPicture(options).then(imagePath => {
        console.log(imagePath)
        if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
          let base64Image = 'data:image/JPEG;base64,' + imagePath
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName(), base64Image);
                });
        } else {
          let base64Image = 'data:image/JPEG;base64,' + imagePath
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName(), base64Image);
        }
    }); */


    //////////////////////////////
    const options: CameraOptions = {
      quality: 25,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG
    }
        
    const tempImage = await this.camera.getPicture(options);
    const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
    const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);
    
    const newBaseFilesystemPath = this.file.dataDirectory;
    
    await this.file.copyFile(tempBaseFilesystemPath, tempFilename, 
                            newBaseFilesystemPath, tempFilename);
    
    const storedPhoto = newBaseFilesystemPath + tempFilename;
    
    //save image name
    var imgName = tempFilename
    var url = this.webview.convertFileSrc(storedPhoto);
    console.log(tempBaseFilesystemPath, tempFilename, newBaseFilesystemPath, url)
    this.updateStoredImages(imgName,url)
    //this.copyFileToLocalDir(newBaseFilesystemPath, imgName, this.createFileName(), url);
 
}
}

