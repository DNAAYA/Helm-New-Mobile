import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private authserv: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    
    if(this.authserv.isLoggedIn) {
      this.router.navigate(['/tasks'])
    } else {
      this.router.navigate(['/login'])
    }
  }
}
