import { Component } from '@angular/core';

@Component({ 
  selector: 'app-root',  // El nombre del selector es el que se pone en index.html como tag.
  templateUrl: './app.component.html',    // Todo el codigo que tenga el template iria a index.html al tag.
  styleUrls: ['./app.component.scss']     
})
export class AppComponent {
  title = 'app-github';
}
