import { Component, OnInit } from "@angular/core";
import { ProductsService } from "src/app/services/products.service";
import { Product } from "src/app/models/product";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  public currentProduct: Product;
  public productsByUser: Product[];
  public currentUser: string;

  constructor(
    public productsService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Ici on utilise des Observables (via subscribe) car le ngOnInit n'est pas rechargé à chaque modification
    // C'est à dire que si on change de user, les données ne seraient pas rechargées.
    this.route.params.subscribe(data => this.currentUser = data['id']);

    // Par exemple, si on passe par this.route.paramMap.get('id'), la valeur serait récupérée la première fois mais ne changerais plus.
    // En souscrivant au param, à chaque modification this.currentUser sera réaffecté.

    // data['productsByUser'], le productsByUser est le nom de la variable passé dans le resolve du routing.
    this.route.data.subscribe(data => this.productsByUser = data['productsByUser']);
  }

  /**
   * showCurrentProduct
   */
  public showCurrentProduct(product: Product) {
    this.currentProduct = product;
  }
}
