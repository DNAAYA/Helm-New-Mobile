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

const STORAGE_KEY = 'my_images';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.page.html',
  styleUrls: ['./question-details.page.scss'],
})
export class QuestionDetailsPage implements OnInit {
  question: Question;
  questionID: string;
  saved = false;
  images = [];

  constructor(
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
    private filePath: FilePath) {
      this.questionID = this.activatedRoute.snapshot.params['qID'];
      window[`myBack`]=()=>{
        console.log('check saved baaaack', this.saved)
        if(!this.saved) {
            console.log('not saved', this.saved)
        this.saveAlert();
        } else {
            console.log('saved ---- #222', this.saved)
            this.navCtrl.back();
        }
    };
      this.storage.create();
     }

 async ngOnInit() {
  this.plt.ready().then(() => {
    this.loadStoredImages();
    console.log('question id : >>> ', this.questionID)
    if(this.questionID) {
       this.getQuestion(this.questionID);
    }
  //  console.log('question information', this.question)
  });
   
  }

  getQuestion(qid) {
    this.dbService.getQuestion(qid).then((question: Question ) => {
      this.question = question;
      console.log('question information', question)
    })
    
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

  deleteImg(imgEntry, position) {
 this.images.splice(position, 1);
 
    this.storage.get(STORAGE_KEY).then(images => {
      console.log('local storage....', images)
        let arr = JSON.parse(images);
        let filtered = arr.filter(name => name != imgEntry.name);
        this.storage.set(STORAGE_KEY, JSON.stringify(filtered));
 
        var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);
 
        this.file.removeFile(correctPath, imgEntry.name).then(res => {
            this.presentToast('File removed.');
        });
    });
  }

  saveNote() {
    
  }
  async presentActionSheet() {
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
  }
  

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
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = [];
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img, path: resPath, filePath: filePath });
        }
      }
    });
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
          buttons: [{
                  text: 'Load from Library',
                  handler: () => {
                      this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                  }
              },
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
createFileName() {
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
  return newFileName;
}

copyFileToLocalDir(namePath, currentName, newFileName) {
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
  }, error => {
      this.presentToast('Error while storing file.');
  });
}

updateStoredImages(name) {
  this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      if (!arr) {
          let newImages = [name];
          this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
          this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
          name: name,
          path: resPath,
          filePath: filePath
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle
  });
}

takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
        quality: 100,
        sourceType: sourceType,
        saveToPhotoAlbum: false,
        correctOrientation: true
    };
 
    this.camera.getPicture(options).then(imagePath => {
        if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
            this.filePath.resolveNativePath(imagePath)
                .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
        } else {
            var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
            var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
        }
    });
 
}
}

