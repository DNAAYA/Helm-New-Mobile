import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Task } from 'src/app/models/task';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-saved-tasks',
  templateUrl: './saved-tasks.component.html',
  styleUrls: ['./saved-tasks.component.scss'],
})
export class SavedTasksComponent implements OnInit {
  userID;
  taskList;
  constructor(
    private ngAuth: AngularFireAuth,
    private router: Router,
    private dbService: DatabaseService
  ) { }

  ngOnInit() {
    this.ngAuth.onAuthStateChanged(user => {
      if (user === null) {
        this.router.navigate(['/sign-in'])
      } else {
        this.userID = user.uid
        console.log('user id', this.userID);
        this.dbService.getSavedTasks(this.userID).subscribe((tasks: Task[] )=> {
          this.taskList = tasks
          console.log('task list', this.taskList)
        })
      }
    });
  }
}
