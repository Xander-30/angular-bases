import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `
                <button (click)="increaseBy(+1)">+1</button>
                <button (click)="resetBy()">reset</button>
                <button (click)="increaseBy(-1)">-1</button>
    
    `
})

export class CounterComponent {

    public counter: number = 10;

    //metodo o funcion
    // increaseBy(): void {
    //   //this.counter = this.counter + 1;
    //   this.counter += 1;
    // }


    //le decimos que recibira de parametro un valor
    increaseBy(value: number): void {
        //   //this.counter = this.counter + 1;
        this.counter += value;
    }

    resetBy(): void {
        this.counter = 10;
    }
}



