import { Component, OnInit } from "@angular/core";
import { Router, NavigationStart, NavigationEnd, NavigationCancel } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "iproducts";

  public currentRoute: string;

  constructor(private router: Router, private updates: SwUpdate) {}

  ngOnInit() {

    // Permet de savoir l'event
    // Utile pour informer l'utilisateur de l'état (ajout d'une barre de chargement etc...)
    this.router.events.subscribe(event => {
      // console.log(event);
      if (event instanceof NavigationStart) {
        this.currentRoute = "START !!!";
      }
      if (event instanceof NavigationEnd) {
        this.currentRoute = "END !!!";
      }
      if (event instanceof NavigationCancel) {
        this.currentRoute = "CANCELED !!!";
      }
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });

    this.updates.available.subscribe(event => {
      console.log('current version is', event.current);
      console.log('available version is', event.available);
    });

    this.updates.activated.subscribe(event => {
      console.log('old version was', event.previous);
      console.log('new version is', event.current);
    });
  }
}
