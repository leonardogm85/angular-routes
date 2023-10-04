import { Component } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { User } from '../entities/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();

  constructor(
    private _authService: AuthService
  ) { }

  onLogin(): void {
    this._authService.login(this.user);
  }

}
