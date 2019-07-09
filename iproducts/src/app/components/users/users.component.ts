import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: Observable<Array<User>>;
  userByPromise: Array<User>;
  userBySub: Array<User>;

  // Exemple avec l'appel direct au UserService sans passer par le routing.
  /*constructor(public userService: UserService) {}

  ngOnInit() {
    // En utilisant le pipe async
    this.users = this.userService.getUserAsync();

    // En utilisant le subscribe
    this.userService
      .getUserAsync()
      .subscribe(result => (this.userBySub = result));

    // Par promise, on attend d'avoir la réponse (toPromise) et quand on l'a on fait quelque chose (then)
    this.userService
      .getUserAsync()
      .toPromise()
      .then(result => (this.userByPromise = result));
  }*/

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // data['users'], le users est le nom de la variable passé dans le resolve du routing.
    this.route.data.subscribe(data => (this.users = data["users"]));
  }
}
