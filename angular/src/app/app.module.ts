import { BrowserModule } from "@angular/platform-browser";
import { NgModule, OnInit } from "@angular/core";

// Ajout des imports pour les formulaires
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

// HTTP
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./components/products/products.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductFormComponent } from "./components/product-form/product-form.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { UsersComponent } from "./components/users/users.component";
import { LandingComponent } from "./components/landing/landing.component";
import { LoginComponent } from "./components/login/login.component";
import { ErrorComponent } from "./components/error/error.component";
import { RoutingModule } from "./routing/routing.module";
import { PerUserProductsComponent } from './components/per-user-products/per-user-products.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    ProductFormComponent,
    UserFormComponent,
    UsersComponent,
    LandingComponent,
    LoginComponent,
    ErrorComponent,
    PerUserProductsComponent
  ],
  imports: [
    BrowserModule,
    // Ajout des imports pour les formulaires
    FormsModule,
    ReactiveFormsModule,

    // HTTP
    HttpClientModule,

    // Routing
    RoutingModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    // Il ne faut pas importer du module Admin (AdminModule) car on veut le lazy loader
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
