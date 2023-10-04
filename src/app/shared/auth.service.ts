import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../entities/user';

@Injectable()
export class AuthService {

  private _authenticatedUser = false;

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private _router: Router
  ) { }

  login(user: User): void {
    if (user.name === 'projeto.base.ddd.mvc@gmail.com' && user.password === 'ProjetoBase@01') {
      this._authenticatedUser = true;
      this.showMenuEmitter.emit(true);
      this._router.navigate(['']);
    } else {
      this._authenticatedUser = false;
      this.showMenuEmitter.emit(false);
    }
  }

  isAuthenticated(): boolean {
    return this._authenticatedUser;
  }

}
