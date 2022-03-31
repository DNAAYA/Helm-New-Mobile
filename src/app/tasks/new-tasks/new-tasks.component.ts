import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { Storage } from '@ionic/storage';
import { Subscription } from 'rxjs';
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
  constructor(
    private dbServices: DatabaseService,
    private ngAuth: AngularFireAuth,
    private authService: AuthService,
    private router: Router,
    private network: Network,
    private storage: Storage,
    private dbService: DatabaseService, 

  ) {

   }

 async  ngOnInit() {
  this.ngAuth.onAuthStateChanged(async user => {
    if (user === null) {
      this.router.navigate(['/login'])
    } else {
      this.userID = user.uid
     await this.dbService.getNewTasks(this.userID).subscribe((tasks: Task[] )=> {
       console.log('new tasks .. testt ', tasks)
       this.taskList = tasks
      })
    }
  });
   // console.log(' test debug ')
  }

}
