import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ActionSheetController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Task } from 'src/app/models/task';
import { AuthService } from 'src/app/services/auth.service';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-new-tasks',
  templateUrl: './new-tasks.component.html',
  styleUrls: ['./new-tasks.component.scss'],
})
export class NewTasksComponent implements OnInit {
  userID;
  taskList = [];
  public searchTerm: string = "";
  // public items: any;
  public searchControl: FormControl;
  constructor(
    private dbServices: DatabaseService,
    private ngAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router,
    private network: Network,
    private storage: Storage,
    private dbService: DatabaseService, 
    private actionSheetCtrl: ActionSheetController


  ) {
    this.searchControl = new FormControl();
   }

 async  ngOnInit() {
  this.ngAuth.onAuthStateChanged(async user => {
    if (user === null) {
      this.router.navigate(['/login'])
    } else {
      this.userID = user.uid
     await this.dbService.getNewTasks(this.userID).subscribe((tasks: Task[] )=> {
       console.log('new tasks .. testt ', tasks)
       this.taskList = tasks;
       this.setFilteredItems("");
       this.searchControl.valueChanges
         .pipe(debounceTime(700))
         .subscribe(search => {
           this.setFilteredItems(search);
         });
      })
    }
  });
   // console.log(' test debug ')
  }

  
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Sort Task',
      cssClass: 'my-custom-class',
      buttons: [
      {
        text: 'Sort By Name',
        icon: 'arrow-down-outline',
        data: 'Data value',
        handler: () => {
          this.taskList.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
        }
      }, 
      {
        text: 'Sort By Date',
        icon: 'calendar-outline',
        handler: () => {
          this.taskList.sort((a,b) => (a.auditDate > b.auditDate) ? 1 : ((b.auditDate > a.auditDate) ? -1 : 0));
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
      }
    ]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

    
  async setFilteredItems(searchTerm) {
    console.log('searchTerm', searchTerm)
    if(searchTerm) {
      this.taskList = this.filterItems(searchTerm);
    } else {
      await this.dbService.getNewTasks(this.userID).subscribe((tasks: Task[] )=> {
        this.taskList = tasks
      })
    }
  }

  filterItems(searchTerm) {
    return this.taskList.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
