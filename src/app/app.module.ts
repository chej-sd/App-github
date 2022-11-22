import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],  // Servicios para implementar que se usaran en distintos componentes
  bootstrap: [AppComponent]
})
export class AppModule { }
