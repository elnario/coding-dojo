import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-calculadora';
 operando1 = 0;
 operando2 = 0;
 resultado = 0;

  sumar() {
    this.resultado = this.operando1 + this.operando2;
  }
}
