import { Injectable } from "@angular/core";
import { Product } from "../models/product";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";
import { ProductsService } from "../services/products.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ProductResolver implements Resolve<Array<Product>> {
  constructor(private productsService: ProductsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<Product>> | Promise<Array<Product>> | Array<Product> {
    // Récupération du name dans l'URL via la variable "id", cette variable est définie dans le routing.model en tant que children
    const name = route.paramMap.get("id");
    return this.productsService.getProductsByName(name);
  }
}
