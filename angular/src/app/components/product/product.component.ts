import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "src/app/models/product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  // Permet de recevoir une information au parent, ici Products.
  @Input()
  public product: Product;

  // Permet d'envoyer une information au parent, ici Products.
  @Output()
  private select = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() { }

  public productSelected() {
    // Sera envoyé au $event dans le parent quand il sera utilisé avec (select)="maMethode($event)"
    this.select.emit(this.product);
  }
}
