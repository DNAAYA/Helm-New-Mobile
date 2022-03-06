import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { Network } from '@ionic-native/network/ngx';
import { AlertController, LoadingController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Audit } from 'src/app/models/audit';
import { Task } from 'src/app/models/task';
import { DatabaseService } from 'src/app/services/database.service';
import { Todo, TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  taskID;
  taskDetails;

  
  todos: Todo = { 
    venueName: "",
    category: "",
    address: "",
    contactName: "",
    contactNumber: null,
    surfaceArea: "",
    numberOfFloors: null,
    numberOfBathrooms: null,
    infrastructureType: "",
    auditDate: null,
    timeSlot: null,
    taskStatus: ""
  }

  venueName: any;
  category: any;
  address: any;
  contactName: any;
  contactNumber: number;
  surfaceArea: any;
  numberOfFloors: any;
  numberOfBathrooms: any;
  infrastructureType: any;
  auditDate: any;
  timeSlot: any;
  nowDate = new Date();

  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService,
    private network: Network,
    private storage: Storage,
    public db: AngularFirestore,
    private callNumber: CallNumber,
    public router: Router,
    private todoService: TodoService,
    private loadingController: LoadingController,
    private alertController: AlertController,
  ) { }

 async ngOnInit() {
      this.taskID = this.activatedRoute.snapshot.params['id']
      console.log('task id', this.taskID);
       await this.dbService.getTaskDetails(this.taskID).then((res: Task) => {
        this.taskDetails = res
      })
      console.log('task details', this.taskDetails);
  }

  async loadTodo(){

    const loading = await this.loadingController.create({
      message: 'loading Todo...'
      
    });
    await loading.present();

    this.todoService.getTodo(this.taskID).subscribe(res => { 
      loading.dismiss();  
      this.todos = res;
    })
  }

  async saveTodo(){

    if (this.taskID) { 
      this.todoService.addTodo(this.todos);
    }

  }

  // function ben3ml be add lel data 3al firebase
 async setTodo(){
  
  this.todoService.setTodo(this.todos, this.taskID);
    let loading = await this.loadingController.create({
      message: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1500);
  }

async editVenueName(){

  const alert = await this.alertController.create({

    header: 'Confirm!',
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

          if(this.venueName){

            this.db.collection('tasks').doc(this.taskID).update({
        
              
              venueName: this.venueName
             }).then(() => { this.venueName = '';})
             
          
            
          }
          
        
          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)

         // console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}


async editAddress(){

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {

          
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {

          if(this.address){

            this.db.collection('tasks').doc(this.taskID).update({
              address: this.address
             }).then(() => { this.address = ''; })

          }
          
        
          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)
        }
      }
    ]
  });

  await alert.present();
}

async editCategory(){

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {

          if(this.category){

            this.db.collection('tasks').doc(this.taskID).update({
        
              
              category: this.category
        
             }).then(() => { this.category = ''; })
          }
          
        
          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)
        
         // console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}

async editContactName(){

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {

          if(this.contactName){

            this.db.collection('tasks').doc(this.taskID).update({
        
              
              contactName: this.contactName
        
             }).then(() => { this.contactName = ''; })
             
          
            
          }

          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)
        
          //console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();


  
  

}

async editContactNumber(){

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {
          if(this.contactNumber){

            this.db.collection('tasks').doc(this.taskID).update({
        
              
              contactNumber: this.contactNumber
        
             }).then (() => {["this.contactNumber = ''; "]})

          }
          
        
          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)

          
         // console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();

}

async editSurfaceArea(){

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {

          if(this.surfaceArea){

            this.db.collection('tasks').doc(this.taskID).update({
        
              
              surfaceArea: this.surfaceArea
        
             }).then(() => { this.surfaceArea = '';})
             
          
            
          }
          
        
          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)

          
        //  console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();

}

async editNumberOfFloors(){

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {

          if(this.numberOfFloors){

            this.db.collection('tasks').doc(this.taskID).update({
        
              
              numberOfFloors: this.numberOfFloors
             }).then(() => { this.numberOfFloors = '';})
             
        
          }
          
        
          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)
         // console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}

async editNumberOfBathrooms(){

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {

          if(this.numberOfBathrooms){

            this.db.collection('tasks').doc(this.taskID).update({
        
              
              numberOfBathrooms: this.numberOfBathrooms
             }).then(() => { this.numberOfBathrooms = '';})
             
          
            
          }
          
        
          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)
        
          
          
          //console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();

}

async editInfra(){

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {

          if(this.infrastructureType){

            this.db.collection('tasks').doc(this.taskID).update({
        
              
              infrastructureType: this.infrastructureType
             }).then(() => { this.infrastructureType = '';})

          }
          
          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)
        
          //console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();

}

async editAuditDate(){

  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {

          if(this.auditDate){

            this.db.collection('tasks').doc(this.taskID).update({    
              auditDate: this.auditDate
             }).then(() => { this.auditDate = '';})

          }
          let loading = await this.loadingController.create({
            message: 'Please wait...'
          });
        
          loading.present();
        
          setTimeout(() => {
            loading.dismiss();
          }, 1500)
         // console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();


 

  

}

async editTimeslot(){
  
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Confirm!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Okay',
        handler: async() => {

          
  if(this.timeSlot){

    this.db.collection('tasks').doc(this.taskID).update({

      
      timeSlot: this.timeSlot
     }).then(() => { this.timeSlot = '';})
     
  
    
  }
  

  let loading = await this.loadingController.create({
    message: 'Please wait...'
  });

  loading.present();

  setTimeout(() => {
    loading.dismiss();
  }, 1500)

  
         // console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();


}

  async editTodo(){

    

    this.todoService.updateTodo(this.todos.venueName , this.taskID)

    let loading = await this.loadingController.create({
      message: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 1500)
 
    
  
  }

  remove(item) { 
    this.todoService.removeTodo(item.id);
  }



  /* To add call number functionality */
  async callNow(number: string) {
    try{ 
      await this.callNumber.callNumber(number , true)

    }
    
      catch(e){
       // console.log
      };
  }

  endTime(){
    this.db.collection('tasks').doc(this.taskID).update({
     endDate: this.nowDate 
     })
  
  }

   addToLocalStorage(t) {
    
    // let id = (performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"");
    let audit: Audit = {
      createdAt: Date.now(),
      createdBy: t.selectedUser,
      id: '',
      subTitle: '',
      divTitle: '',
      title: t.title,
      taskID: t.tid,
      divs: [{}],
      questions: [],
      subs: [{}]
      
    }
    this.dbService.addAudit(audit, this.taskID);
    // add task id to local storage
     this.storage.set(`helmTask-`, this.taskDetails)

  }
}
