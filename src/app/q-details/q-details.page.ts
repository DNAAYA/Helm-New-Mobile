import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';

import * as firebase from 'firebase';

@Component({
  selector: 'app-q-details',
  templateUrl: './q-details.page.html',
  styleUrls: ['./q-details.page.scss'],
})
export class QDetailsPage implements OnInit {
  names; tasks; userId; titleId; task; subT: any;
  division; base64Image; STORAGE_KEY; STORAGE_KEY2; images= [];
  localImgPath; msgAlert;

  capturedSnapURL:string = '';

  cameraOptions: CameraOptions = {
    quality: 20,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  imageText = true;
  note;
  qIndex: any;
  divisionName: any;
  tid: any;
  imageName: string = '';
  imageObj: { name: string; data: string; div: any; };


constructor( 
  public alertController: AlertController,
  public db: AngularFirestore,
  private activatedRoute: ActivatedRoute,
  public router: Router,
  private camera: Camera,
  private plt: Platform,
  private file: File,
  private storage: Storage,
  private toastController: ToastController,
  private webview: WebView,
  private ref: ChangeDetectorRef,
  private http: HttpClient,
  private fStorage: AngularFireStorage
   ) { 
 
   }

ngOnInit() {
  
      // Check Platform Ready
      this.plt.ready().then(() => {
      this.loadStoredImages();
        });
  /* End Ssoliman Work */
}
/** START Ssoliman Methods (loadStoredImages) */
loadStoredImages() {
 // console.log('storage key:', this.STORAGE_KEY)
  this.storage.get(this.STORAGE_KEY).then(images => {
    //  console.log('____ get sorted images ___:', images)
    if (images) {
      let arr = JSON.parse(images);
      const imagesArr =[];
      imagesArr.push(arr);
     // console.log('____ get sorted arr ___:', imagesArr)
      this.images = [];
      for (let img of imagesArr[0]) {
         // console.log('____ get sorted img.fileName ___:', img.image)
        let filePath = this.file.dataDirectory + img.fileName;
        let resPath = this.pathForImage(filePath);
        this.images.push({ name: img.fileName, path: resPath, filePath: filePath });
      }

      /* start debug console section (loadStoredImages) */
      //console.log('DEBUG(loadStoredImages) #1- storage images:', images);
      //console.log('DEBUG(loadStoredImages) #2- images array:', this.images);

      /*  End debug console section (loadStoredImages) */  
    }
  });
}
/** END Ssoliman Methods (lo\1adStoredImages) */
/** START Ssoliman Methods (capture image) */
// Capture image method >>
captureImage() {
  //console.log(this.file)
  var options: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.CAMERA,
    saveToPhotoAlbum: false,
    correctOrientation: true
  };
  
  this.camera.getPicture(options).then(imagePath => {
  var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
  var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
  this.base64Image = 'data:image/JPEG;base64,' + imagePath
  this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
  /**
   * start debug console section (capture image)
   */
  //console.log('DEBUG(captureImage) #1- Image Path:', imagePath);
  //console.log('DEBUG(captureImage) #2- base64Image:', this.base64Image);

 
  /**
   * End debug console section (capture image)
   */    
  });
}

// Create File Name Method >>
createFileName() {
  var d = new Date(),
      n = d.getTime(),
      newFileName = n + ".jpg";
  /* start debug console section (createFileName) */
  //console.log('DEBUG(createFileName) #1- newFileName:', newFileName);
  /*  End debug console section (createFileName) */  
  return newFileName;
}
// Copy file To Local Direction >>
copyFileToLocalDir(namePath, currentName, newFileName) {
  //console.log(this.file)
  this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {

  /* start debug console section (copyFileToLocalDir) */
  //console.log('Success Message :', success)
  /* END debug console section (copyFileToLocalDir) */
  var imageInfo = {
      fileName: newFileName,
      image: this.base64Image
  }
   //  this.updateStoredImages(newFileName);
    this.updateStoredImages(imageInfo)
  // this.addToLocalStorage(this.STORAGE_KEY,ImageInfo);
  }, error => {
      this.presentToast('Error while storing file.');
  });
}
// Add Image To Local Storage
async addToLocalStorage(key: string, object: Object) {
  try {
   await this.storage.set(key, JSON.stringify(object));
  /* start debug console section (addToLocalStorage) */
  //console.log('DEBUG(addToLocalStorage) #1- newFileName:', result);
  /* END debug console section (copyFileToLocalDir) */
    return true;
    } catch (reason) {
   // console.log(reason);
    return false;
    }
}

// Update File To Local Storage Ionic >>
updateStoredImages(name) {
  //console.log('names ---', name)
  this.storage.get(this.STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
     // console.log('____storage.get result____:', arr )
      if (!arr) {
          let newImages = [name];
         // console.log('____storage.get result newImages____:', newImages )
          this.storage.set(this.STORAGE_KEY, JSON.stringify(newImages));
      } else {
          arr.push(name);
         // console.log('____storage.get result arr:', arr )
          this.storage.set(this.STORAGE_KEY, JSON.stringify(arr));
      }

      let filePath = this.file.dataDirectory + name.fileName;
      let resPath = this.pathForImage(filePath);

      let newEntry = {
          name: name.fileName,
          path: resPath,
          filePath: filePath,
      };

      this.images = [newEntry, ...this.images];
      this.ref.detectChanges(); // trigger change detection cycle

  });
}

// delete captured image
deleteImage(imgEntry, position) {
  //console.log('delete image' , imgEntry)
  this.images.splice(position, 1);

  this.storage.get(this.STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(name => name != imgEntry.name);
      this.storage.set(this.STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
          this.presentToast('File removed.');
      });
  });
}
// Create PATH FOR IMAGES     
pathForImage(img) {
  if (img === null) {
    return '';
  } else {
    let converted = this.webview.convertFileSrc(img);
    return converted;
  }
}
// Create Alert Result
async presentToast(text) {
  const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
  });
  toast.present();
  }


  imageExists(url, callback) {
      //console.log('image Link', url)
      var img = new Image();
      img.onload = function() { callback(true); };
      img.onerror = function() { callback(false); };
      img.src = url;
    }
/** END Ssoliman Methods (capture image) */

async showAlert() {
  const questionWithoutSpace = (this.division.question).split(' ').join('');
  const imgName = questionWithoutSpace.split('?').join('')

 // console.log('image name', imgName)
  this.localImgPath = `../assets/img/${imgName}.jpg`;
  this.imageExists(this.localImgPath, async res=> {
      if(res == true) {
          
          const alert = await this.alertController.create({
              // header: 'Alert',
                  cssClass:'my-custom-class',
              // subHeader: 'Subtitle for alert', 
                  message: `${this.division.fullQuestion}
                  <img src="${this.localImgPath}" style="border-radius: 2px"  class="alert-image">`,
                  buttons: ['Close']
              });
          
              await alert.present();
      } else {
          const alert = await this.alertController.create({
              // header: 'Alert',
                  cssClass:'my-custom-class',
              // subHeader: 'Subtitle for alert', 
                  message: `${this.division.fullQuestion}`,
                  buttons: ['Close']
              });
          
              await alert.present();
      }
  })
 
  }

showConfirm() {
  this.alertController.create({
//  header: 'Confirm Alert',
  cssClass:'my-custom-class',
//  subHeader: 'Beware lets confirm',
  message: 'Are you sure you want to generate report?',
  buttons: [
      {
      text: 'No',
      handler: () => {
          console.log('Generate Report: I am not sure');
      }
      },
      {
      text: 'Yes',
      handler: () => {
          console.log('Generate Report: Yes I am sure');
      }
      }
  ]
  }).then(res => {
  res.present();
  });
  }

async addComment(comment){

  console.log(comment)

  

  const alert = await this.alertController.create({

  header: 'Save changes?',
  buttons: [
      {
      text: 'Cancel',
      role: 'cancel',
      cssClass: 'secondary',
      handler: () => {
          console.log('Confirm Cancel');
      }
      }, {
      text: 'Confirm',
      handler: async () => {

          /* await this.storage.get(`helmTaskImages-${this.tid}`).then(async res => {
              res.push(this.imageObj)
              //console.log(res)
             await this.storage.set(`helmTaskImages-${this.tid}`, res).then(res => console.log(res))
          }) */

          await this.storage.get(`helmTask-${this.tid}`).then(res => {
              console.log(this.note)
              res[`${this.divisionName}`][this.qIndex].note = this.note
              res[`${this.divisionName}`][this.qIndex].imgName = this.imageName
              res[`${this.divisionName}`][this.qIndex].imgURL = this.capturedSnapURL
              this.storage.set(`helmTask-${this.tid}`, res).then(res => console.log(res))
          })

        
          }
      }
  ]
  })
  await alert.present();

  }
  async takeSnap() {

      const options: CameraOptions = {
      quality: 20,
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
      this.imageName = tempFilename
      this.capturedSnapURL = this.webview.convertFileSrc(storedPhoto);
      console.log(tempBaseFilesystemPath, tempFilename, newBaseFilesystemPath, tempFilename)

      

      /* this.camera.getPicture(this.cameraOptions).then(async (imageData) => {

          var now = Date.now()
          let base64Image = 'data:image/jpeg;base64,' + imageData;
          this.imageObj = {
              name: `${this.divisionName}-${now}`,
              data: base64Image,
              div: this.divisionName
          }

          this.imageName = this.imageObj.name

          

          console.log(this.imageObj)
          this.capturedSnapURL = base64Image;
          console.log(this.capturedSnapURL)
          this.imageText = false

      }, (err) => {
        
        console.log(err);
        // Handle error
      }); */
      
    }
}
