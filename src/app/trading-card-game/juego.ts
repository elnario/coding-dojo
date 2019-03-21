import { Jugador } from './jugador';

export class Juego {
    jugadorActivo: Jugador;
    oponente: Jugador;

    constructor(jugadorActivo: Jugador, oponente: Jugador) {
        this.jugadorActivo = jugadorActivo;
        this.oponente = oponente;
    }

    iniciarJuego() {
        this.jugadorActivo.barajarMazo();
        this.oponente.barajarMazo();
    }
}
