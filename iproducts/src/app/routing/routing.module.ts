import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ErrorComponent } from "../components/error/error.component";
import { LandingComponent } from "../components/landing/landing.component";
import { LoginComponent } from "../components/login/login.component";
import { ProductsComponent } from "../components/products/products.component";
import { UsersComponent } from "../components/users/users.component";
import { LoggedInGuard } from "../guards/logged-in.guard";
import { UserResolver } from "../resolvers/user-resolver.service";
import { PerUserProductsComponent } from "../components/per-user-products/per-user-products.component";
import { ProductResolver } from '../resolvers/products-resolver.service';

export const ROUTES: Routes = [
  // Par défaut, toutes les URLs (ex home), est aussi l'url vide (''), le pathMatch full indique que ce n'est plus le cas.
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "home", component: LandingComponent },
  // Le canActivate indique que pour accéder à cette page, il faut que la guard LoggedInGuard retourne vrai
  {
    path: "products",
    component: ProductsComponent,
    canActivate: [LoggedInGuard]
  },
  // le resolve permet d'indiquer qu'on va aller sur la page si le resolver est correct
  // si dans notre exemple, l'url pour récupérer les users est fausse, on ne va pas aller sur la page.
  {
    path: "users",
    component: UsersComponent,
    resolve: { users: UserResolver }
  },
  {
    path: "peruserproducts",
    component: PerUserProductsComponent,
    children: [{ path: ":id", component: ProductsComponent, resolve: {productsByUser: ProductResolver} }]
  },
  { path: "login", component: LoginComponent },
  // Ici le module Admin sera lazy loadé lorsqu'on va y accéder et non pas à l'arrivé sur l'application
  { path: "admin", loadChildren: '../modules/admin/admin.module#AdminModule' },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  declarations: [],
  imports: [
    // On indique ici qu'on utilise la constante ROUTE pour le routing.
    RouterModule.forRoot(ROUTES)
  ],
  exports: [
    // Permet d'exposer le module au reste de l'application, nottament app.module
    RouterModule
  ]
})
export class RoutingModule {}
