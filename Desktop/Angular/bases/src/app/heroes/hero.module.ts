import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { combineLatest } from "rxjs";



@NgModule({

    declarations: [
        HeroComponent,
        ListComponent,

    ],
    //para que se puedan usar en cualquier lado los componentes
    exports: [

        HeroComponent,
        ListComponent,
    ],
    imports: [
        CommonModule
    ]

})



export class HeroModule { }