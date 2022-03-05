import { Component, OnDestroy, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { Network } from '@ionic-native/network/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { observable, Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { DatabaseService } from './services/database.service';
import { NetworkService } from './services/network.service';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  disconnectSubscription;
  connectSubscription
  networkAlert;
  subscription: Subscription ;
  database = this.db.database.app.database('https://helm-8734b-4d96d.firebaseio.com/');  

  constructor(
    private networkServ: NetworkService,
    private localDB: StorageService,
    private storage: Storage,
    private db: AngularFireDatabase,
    private networkService: NetworkService,
    private dbServ: DatabaseService,
    private alertCTRL: AlertController
  ) {
    
  }

  
  ngOnInit(): void {
    this.storage.create();
    this.networkService.onNetworkChange().subscribe(status => {
      if(status == 0) {
        console.log('status network Online >>>>>', status);
        
        this.storage.length().then(async res => {
          if(res == 0) {
           
            // get priorities and set to local storage
            this.database.ref('/').on('value', val => {
              let res = val.val();
              let dbKeys = Object.keys(res).map(k => k);
              dbKeys.forEach(key => {
                this.storage.set(key, res[key])
              })
            })
          } else {
            this.storage.get('Priorities').then(res => console.log('pr in local storage', res))
          }
        })

      } 
      else {
       // this.storage.clear();
      this.storage.length().then(async res => {
        if(res == 0) {
         let alert = await this.alertCTRL.create({
            message: 'please open network to load data for the first time',
            header: 'Alert',
            buttons: ['OK']
          })
          await alert.present();
        }
        console.log('status network Offline >>>__>>', res )
      })
      }

    })
  }

 ngOnDestroy(): void {
 }


 
}
