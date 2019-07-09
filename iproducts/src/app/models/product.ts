export class Product {
  public soldOut = false;

  constructor(public name: string, public price: number) {}

  public setSoldOut(soldOut: boolean): void {
    this.soldOut = soldOut;
  }

  public toggleSoldOut(): void {
    this.soldOut = !this.soldOut;
  }
}
