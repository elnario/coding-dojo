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

        for (let i = 0; i < 3; i++) {
            this.jugadorActivo.robarCarta();
        }

        for (let i = 0; i < 4; i++) {
            this.oponente.robarCarta();
        }
    }

    iniciarTurno() {
        if (this.jugadorActivo.contadores_mana < 10) {
            this.jugadorActivo.contadores_mana++;
        }
        this.jugadorActivo.mana = this.jugadorActivo.contadores_mana;
        this.jugadorActivo.robarCarta();
    }

    finalizarTurno(): any {
        const jugador = this.jugadorActivo;
        this.jugadorActivo = this.oponente;
        this.oponente = jugador;
    }
}
