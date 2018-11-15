import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title:string = 'app-calculadora';
  operando1:number = 0;
  operando2:number = 0;
  resultado:number = 0;

  sumar() {
    this.resultado = this.operando1 + this.operando2;
  }
}
