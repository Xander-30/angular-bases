import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  //array tipo string
  public heroNames: string[] = ['Spiderman', 'Iroman', 'Hulk', 'She Hulk', 'Thor'];
  public deletedHero?: string = ''; //la declaro para poder usar esta variable
  //shift():remueve el primer elemento de mi array y lo regresa
  //pop():remueve el ultimo elemento y lo regresa
  removeLastHero(): void {
    this.deletedHero = this.heroNames.pop();

  }

}
