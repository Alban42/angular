import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBig]'
  // selector: 'div' -> la directive sera appelée sur toutes les div.
})
export class BigDirective implements OnInit {

  private previousSize: string;
  private previousContent: string;
  private counter: number = 0;

  // Cette annotation permet d'ajouter un listener sur le host (host = élément sur lequel on a appliqué la directive)
  @HostListener('click')
  private clickHandler() {
    console.log("Click from HostListener !");
    console.log(this.elem);
  }

  @HostListener('mouseenter')
  private mouseenter() {
    (this.elem.nativeElement as HTMLDivElement).style.fontSize = this.size + "px";
    this.counter++;
    (this.elem.nativeElement as HTMLDivElement).innerHTML += this.counter;
  }

  @HostListener('mouseleave')
  private mouseleave() {
    (this.elem.nativeElement as HTMLDivElement).style.fontSize = this.previousSize;
    (this.elem.nativeElement as HTMLDivElement).innerHTML = this.previousContent;
  }

  // Permet de rajouter dynamiquement un nouvel attribut sur l'élément sur lequel sera appliqué la directive (dans notre cas la div)
  @Input('size')
  private size: number = 0;

  //Injection en paramètre de l'élément sur lequel sera appliqué la directive
  constructor(private elem: ElementRef) {
    console.log("BigDirective");
    // Dans la console on voit tous les attributs de l'élément
    console.log(elem);

    // (elem.nativeElement as HTMLDivElement) -> Permet d'indiquer à l'IDE que nativeElement est une DIV HTML mais n'est pas utilisé dans la transcription
    // (elem.nativeElement as HTMLDivElement).style.display = "none";
    
    // Exemple d'utilisation de la directive, mais il faut utiliser le @HostListener plutot que le addEventListener.
    (elem.nativeElement as HTMLDivElement)
      .addEventListener(
        "click", 
        () => console.log("Click from event listener")
      );

    console.log(`Depuis le constructeur ${this.size}`);
   }

   // Le constructeur est fait beaucoup trop top, la valeur du size indiqué dans la page HTML n'est pas encore attribuée
   // C'est pour ça qu'il faut le faire dans le ngOnInit.
   ngOnInit(): void {
    console.log(`Depuis le ngOnInit ${this.size}`);
    this.previousSize = (this.elem.nativeElement as HTMLDivElement).style.fontSize;
    this.previousContent = (this.elem.nativeElement as HTMLDivElement).innerHTML;


  }
}
