import { Component, OnInit } from "@angular/core";
import { UserService } from "src/app/services/user.service";
import { User } from "src/app/models/user";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: "app-per-user-products",
  templateUrl: "./per-user-products.component.html",
  styleUrls: ["./per-user-products.component.css"]
})
export class PerUserProductsComponent implements OnInit {
  private currentUser: string;
  public users: Observable<Array<User>>;

  constructor(public userService: UserService, private router: Router) {}

  ngOnInit() {
    this.users = this.userService.getUserAsync();
  }

  public selectUser(user: User) {
    // Appel de la page peruserproducts/:name ou le :name sera le user.name du user sélectionné
    this.router.navigate(["/peruserproducts", user.name]);
    this.currentUser = user.name;
  }

  public isSelected(name: string): boolean {
    return this.currentUser === name;
  }
}
