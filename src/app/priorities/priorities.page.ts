import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Priority } from '../models/priority';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.page.html',
  styleUrls: ['./priorities.page.scss'],
})
export class PrioritiesPage implements OnInit {
  prioritiesList = [];
  constructor(
    private dbService: DatabaseService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dbService.getPriorities().then((pr: Priority[]) => {
      console.log('prioritiesd list', pr);
      this.prioritiesList = pr
    })
  }


}
