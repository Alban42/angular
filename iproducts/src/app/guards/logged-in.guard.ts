import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: "root"
})
export class LoggedInGuard implements CanActivate {
  // On injecte le Router et le service authentification
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    // An faisant un appel direct au boolean isAuthenticated
    // const loggedIn = this.authService.isAuthenticated;
    // if (!loggedIn) {
    //   this.router.navigate(["/login"]);
    // }
    // return loggedIn;

    // En passant par un Observable
    const result = this.authService.canLogIn();
    let loggedIn = false;
    result.subscribe(elem => {
      console.log(elem);
      loggedIn = elem;
      if (!loggedIn) {
        this.router.navigate(["/login"]);
      }
    });
    return result;
  }
}
