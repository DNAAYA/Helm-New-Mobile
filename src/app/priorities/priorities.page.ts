import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  auditKey: string;
  constructor(
    private dbService: DatabaseService,
    private router: Router,
    private network: Network,
    private activatedRoute: ActivatedRoute
   // private localDB: LocalStorageService
  ) { 

  }

  async ngOnInit() {
    // this.router
    //this.auditKey = this.router.snapshot.paramMap.get("auditKey")
    await this.activatedRoute.queryParams.subscribe(params => {
      if (params && params.auditKey) {
        this.auditKey = params.auditKey;
      }
    });

    console.log('audit key', this.auditKey);
    this.dbService.getPriorities().then((pr: Priority[]) => {
      console.log('prioritiesd list', pr);
      this.prioritiesList = pr
    })
  }


}
