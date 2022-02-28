import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.page.html',
  styleUrls: ['./task-details.page.scss'],
})
export class TaskDetailsPage implements OnInit {
  taskID;
  taskDetails;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dbService: DatabaseService
  ) { }

  ngOnInit() {
    this.taskID = this.activatedRoute.snapshot.params['id']
    console.log('task id', this.taskID);
    this.dbService.getTaskDetails(this.taskID).subscribe(task => {
      console.log('task details', task);
      this.taskDetails = task
    })
  }

}
