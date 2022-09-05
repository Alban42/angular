import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  maxBioLength: number = 255;

  hero: Hero = {
    id: 1,
    name: 'Windstorm',
    birthdate: new Date('2020-01-14'),
    bio: ''
  }

  constructor() { }

  ngOnInit(): void {
  }
}
