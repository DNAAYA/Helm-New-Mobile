import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Subscriber, Subscription } from 'rxjs';
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
  constructor(
    private ngAuth: AngularFireAuth,
    private router: Router,
    private dbService: DatabaseService, 
    private network: Network,
    private storage: Storage,
    public navCtrl: NavController
  ) {
   }

  async ngOnInit() {
   await this.storage.get('tasks').then((res: Task[]) => {
      this.savedtaskList = res.filter(e=> e.completed == true)
      console.log('saved tasks from local storage', res)
    })
  }

  
}
