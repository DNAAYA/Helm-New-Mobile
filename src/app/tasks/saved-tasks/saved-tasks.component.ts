import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Subscriber, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Task } from 'src/app/models/task';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-saved-tasks',
  templateUrl: './saved-tasks.component.html',
  styleUrls: ['./saved-tasks.component.scss'],
})
export class SavedTasksComponent implements OnInit {
  userID;
  savedtaskList;
  public searchTerm: string = "";
  // public items: any;
  public searchControl: FormControl;
  constructor(
    private ngAuth: AngularFireAuth,
    private router: Router,
    private dbService: DatabaseService, 
    private network: Network,
    private storage: Storage,
    public navCtrl: NavController,
    private actionSheetCtrl: ActionSheetController
  ) {
    this.searchControl = new FormControl();

   }

  async ngOnInit() {
    this.ngAuth.onAuthStateChanged(async user => {
      if (user === null) {
        this.router.navigate(['/login'])
      } else {
        this.userID = user.uid
       await  this.dbService.getSavedTasks(this.userID).subscribe((tasks: Task[] )=> {
         this.savedtaskList = tasks;
         this.setFilteredItems("");
          this.searchControl.valueChanges
            .pipe(debounceTime(700))
            .subscribe(search => {
              this.setFilteredItems(search);
            });
        })
      }
    });
  }

  
  async setFilteredItems(searchTerm) {
    console.log('searchTerm', searchTerm)
    if(searchTerm) {
      this.savedtaskList = this.filterItems(searchTerm);
    } else {
      await this.dbService.getSavedTasks(this.userID).subscribe((tasks: Task[] )=> {
        this.savedtaskList = tasks
      })
    }
  }

  filterItems(searchTerm) {
    return this.savedtaskList.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
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
          this.savedtaskList.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
        }
      }, 
      {
        text: 'Sort By Date',
        icon: 'calendar-outline',
        handler: () => {
          this.savedtaskList.sort((a,b) => (a.auditDate > b.auditDate) ? 1 : ((b.auditDate > a.auditDate) ? -1 : 0));
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

  
}
