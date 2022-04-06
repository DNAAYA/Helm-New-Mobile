import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';
import { Task } from '../models/task';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit, OnDestroy {
  userID;
  subscription: Subscription ;
  getTasks$: Subscription;
  getPr$: Subscription;
  getSubs$: Subscription;
  getDivs$: Subscription;
  getQuestions$: Subscription;
  getdublicatedSub$: Subscription;
  
  constructor(
    private dbService: DatabaseService, 
    private network: Network,
    private storage: Storage,
    private ngAuth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {
    this.ngAuth.onAuthStateChanged(user => {
            console.log('user', user)
            if (user === null) {
              this.router.navigate(['/login'])
            } else {
              this.userID = user.uid
              this.dbService.getTasks().subscribe((tasks: Task[] )=> {
                let userTasks = tasks.filter(e => e.selectedUser == this.userID)
                this.storage.set('tasks', userTasks).then(tasks => console.log(tasks))
              })
            }
          });
    
      //   // online method 
      //  this.network.onConnect().subscribe(() => {
      //     console.log('network status online ***_***' );
      //     this.ngAuth.onAuthStateChanged(user => {
      //       console.log('user', user)
      //       if (user === null) {
      //         this.router.navigate(['/login'])
      //       } else {
      //         this.userID = user.uid
      //         this.dbService.getTasks().subscribe((tasks: Task[] )=> {
      //           let userTasks = tasks.filter(e => e.selectedUser == this.userID)
      //           this.storage.set('tasks', userTasks).then(tasks => console.log(tasks))
      //         })
      //       }
      //     });
      //   })
    
      //   // offline 
    
      //   this.network.onDisconnect().subscribe(() => {
      //     this.storage.get('tasks').then(tasks => console.log(tasks))
      //     console.log('offline mode ***_***');
      //   })


  }

  LogOutClick() {
    this.ngAuth.signOut().then(() => {
      this.router.navigate(['/login']); 
    })
  }
  ngOnDestroy(): void {
  }

}
