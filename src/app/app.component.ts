import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  showMenu = false;

  subscription?: Subscription;

  constructor(
    private _authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscription = this._authService.showMenuEmitter.subscribe(show => this.showMenu = show);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
