import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  heroes: Hero[] = HEROES;

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }
}
