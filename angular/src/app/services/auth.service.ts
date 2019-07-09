import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "./user.service";

import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/map";
import "rxjs/add/operator/find";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public isAuthenticated = false;
  public username: string;

  constructor(private userService: UserService) {}

  public login(username: string) {
    this.isAuthenticated = true;
    this.username = username;
  }

  public canLogIn(): Observable<boolean> {
      return this.userService
        .getUserAsync()
        // On merge un tableau de user en user -> User[] => User
        // L'Observable est maintenant une liste de User et non une liste de User[].
        .mergeMap(elem => elem)
        .find(elem => elem.name === this.username)
        .map(elem => elem !== undefined);
  }
}
