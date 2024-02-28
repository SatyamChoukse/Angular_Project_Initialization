import {  Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isLoggedIn: boolean = false;
  //TODO: rename to subscription or subscriptions if array
  public loggedInSubscription!: Subscription;
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedIn();
    this.loggedInSubscription = this.authService.onLoginChange.subscribe(
      (res: boolean) => {
        this.isLoggedIn = res;
      }
    )
  }

  public logout() {
    localStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }
}
