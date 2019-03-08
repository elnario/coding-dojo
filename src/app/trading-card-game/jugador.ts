export class Jugador {

  nombre: string;
  vidas: number;
  mazo: number[];
  mano: number[];
  mana: number;
  mana_maximo: number;


  constructor(nombre: string) {
    this.nombre = nombre;
    this.vidas = 30;
    this.mazo = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    this.mano = [];
    this.mana = 0;
    this.mana_maximo = 0;
  }

  robarCarta() {
    if (this.mazo.length > 0) {
      if (this.mano.length < 5) {
        this.mano.push(this.mazo[0]);
      }
      this.mazo.splice(0, 1);
    } else {
      this.vidas--;
    }
  }

  jugarCarta(carta: number, objetivo: Jugador) {
    objetivo.vidas -= carta;
    this.mana -= carta;

    const indice = this.mano.indexOf(carta);
    this.mano.splice(indice, 1);
  }

  barajar() {
    let indice = 0;
    const temp = [];

    while (this.mazo.length > 0) {
      indice = Math.floor(Math.random() * this.mazo.length);
      temp.push(this.mazo[indice]);
      this.mazo.splice(indice, 1);
    }
    this.mazo = temp;
  }

}
