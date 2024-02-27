import {  Component, OnDestroy, OnInit } from '@angular/core';
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
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isLoggedInF();
    this.loggedInSubscription = this.authService.isLoggedInE.subscribe(
      (res: boolean) => {
        this.isLoggedIn = res;
      }
    )
  }

  public logout() {
    localStorage.clear();
    this.isLoggedIn = false;
  }

  ngOnDestroy(): void {
    this.loggedInSubscription.unsubscribe();
  }
}
