import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationService } from '../fetch-api-data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  constructor(
    public fetchApiData: UserRegistrationService,
    public router: Router) { }

  logoutUser(): void {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.router.navigate(['welcome']);
  }
}
