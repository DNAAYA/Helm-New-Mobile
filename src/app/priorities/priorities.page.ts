import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { Priority } from '../models/priority';
import { DatabaseService } from '../services/database.service';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-priorities',
  templateUrl: './priorities.page.html',
  styleUrls: ['./priorities.page.scss'],
})
export class PrioritiesPage implements OnInit {
  prioritiesList = [];
  constructor(
    private dbService: DatabaseService,
    private router: Router,
    private network: Network,
    private localDB: LocalStorageService
  ) { }

  ngOnInit() {
    this.localDB.getPriorities().then((pr: Priority[]) => {
      console.log('prioritiesd list', pr);
      this.prioritiesList = pr
    })
  }


}
