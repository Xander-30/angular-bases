import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


@NgModule({
    declarations: [
        CounterComponent,
    ],
    //se lo importa para poderlo usar
    exports: [
        CounterComponent
    ]

})

export class CounterModule { }