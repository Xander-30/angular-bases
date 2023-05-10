import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//import { HeroComponent } from './heroes/hero/hero.component';

import { GastosComponent } from './cuentas/gastos/gastos.component';
import { DebitosComponent } from './cuentas/debitos/debitos.component';
import { FijaComponent } from './utilidades/diarias/fija/fija.component';
import { PasivaComponent } from './utilidades/diarias/pasiva/pasiva.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/couter.module';
import { HeroModule } from './heroes/hero.module';


@NgModule({
  declarations: [
    AppComponent,
    //HeroComponent,

    GastosComponent,
    DebitosComponent,
    FijaComponent,
    PasivaComponent,
    //ListComponent
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
