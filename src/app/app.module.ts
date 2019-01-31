import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { JuegoBolicheComponent } from './juego-boliche/juego-boliche.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegoBolicheComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
