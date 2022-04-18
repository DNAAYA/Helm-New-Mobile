import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signIn_form: FormGroup;
  showPassword = false;
  passwordToggleIcon ='eye';
  errorMessage: string = '';

  // el validation messages el betezhar fel login page
  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };
  constructor(
    private  formBuilder: FormBuilder,
    private navCtrl: NavController,
    private authServ: AuthService,
    private db: AngularFirestore,
    private loadingController: LoadingController,
    private alertCTRL: AlertController,

  ) { 

  }

  ngOnInit() {
    console.log('login page test ????')
    // the validations form
    this.signIn_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });

  }

  async errorAlert() {
    let alert = await this.alertCTRL.create({
      message: 'user name or password is wrong',
      header: 'Alert',
      buttons: ['OK']
    })
    await alert.present();
  }

  async loginUser() {
    let loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    loading.present();

    this.authServ.loginUser(this.signIn_form.getRawValue())
    .then(res => {
      const id = res.user.uid 
       this.db.doc(`users/${id}`).valueChanges().subscribe(res =>{
        if(!res['userPassword']){ 
          this.errorMessage = "";
          this.navCtrl.navigateForward('/create-new-password');  
        }
        else{
          this.errorMessage = "";
          this.navCtrl.navigateForward('/tasks');
        }
        loading.dismiss();
      });
    }, err => {
      loading.dismiss();
      this.errorAlert();
      this.errorMessage = err.message;
    })
  }

  // Start New Show Password Button
  togglePassword(): void{
    this.showPassword = !this.showPassword ;

    if (this.passwordToggleIcon == 'eye') {
      this.passwordToggleIcon = 'eye-off'
    } else {
      this.passwordToggleIcon = 'eye';
    }
  }

}
