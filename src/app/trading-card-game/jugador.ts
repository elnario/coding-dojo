export class Jugador {

    nombre: string;
    vidas: number;
    mazo: number[];
  
    constructor(nombre: string) {
      this.nombre = nombre;
      this.vidas = 30;
      this.mazo = [0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8];
    }
  }