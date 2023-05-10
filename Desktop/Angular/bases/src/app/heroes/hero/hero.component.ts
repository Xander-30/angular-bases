import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor() {

  }

  public name: string = 'iroman';
  public age: number = 45;


  //get y seeder
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //metodo 
  getHeroDescription(): string {
    //concatenamos
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    //TODO
    //para definir errores
    //throw 'Metodo no implementado'
    this.name = 'Spiderman';
  }

  changeAge() {
    this.age = 20;
  }

  resetForm(): void {
    this.name = "iroman";
    this.age = 45;
  }

}
