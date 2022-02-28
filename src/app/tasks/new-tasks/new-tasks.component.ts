import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
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
    private router: Router
  ) {

   }

  ngOnInit() {
    this.ngAuth.onAuthStateChanged(user => {
      if (user === null) {
        this.router.navigate(['/sign-in'])
      } else {
        this.userID = user.uid
        console.log('user id', this.userID);
        this.dbServices.getNewTasks(this.userID).subscribe((tasks: Task[] )=> {
          this.taskList = tasks
          console.log('task list', this.taskList)
        })
      }
    });

  }

}
