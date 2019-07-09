import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.css"]
})
export class ProductFormComponent implements OnInit {
  public product = new Product("", 0);

  @Output()
  private result = new EventEmitter<Product>();

  constructor() {}

  ngOnInit() {}

  public submit() {
    // On va créer un nouveau product car sinon on va toujours passer la même référence de l'objet.
    const np = new Product("", 0);
    // Le assigne permet de faire un "clone" de this.product dans "np"
    Object.assign(np, this.product);
    this.result.emit(np);
  }
}
