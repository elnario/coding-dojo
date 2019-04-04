import { Juego } from './juego';
import { Jugador } from './jugador';

describe('trading-card-game-juego', () => {

  let juego: Juego;


  beforeEach(() => {

    juego = new Juego(new Jugador('Juan'), new Jugador('Jose'));

  });

  it('Debe tener un jugador Activo y un oponente.', () => {
    expect(juego.jugadorActivo).toBeDefined();
    expect(juego.oponente).toBeDefined();
    expect(juego.jugadorActivo.nombre).toBe('Juan');
    expect(juego.oponente.nombre).toBe('Jose');
  });

  it('Al iniciar El juego los jugadores deben barajar su mazo.', () => {

    spyOn(juego.jugadorActivo, 'barajarMazo');
    spyOn(juego.oponente, 'barajarMazo');

    juego.iniciarJuego();
    expect(juego.jugadorActivo.barajarMazo).toHaveBeenCalled();
    expect(juego.oponente.barajarMazo).toHaveBeenCalled();

  });

  it('El jugador activo debe Iniciar con 3 cartas.', () => {

    spyOn(juego.jugadorActivo, 'robarCarta').and.callThrough();
    juego.iniciarJuego();
    expect(juego.jugadorActivo.robarCarta).toHaveBeenCalledTimes(3);
    expect(juego.jugadorActivo.mano.length).toBe(3);
    expect(juego.jugadorActivo.mazo.length).toBe(17);
  });

  it('El oponente debe Iniciar con 4 cartas.', () => {

    spyOn(juego.oponente, 'robarCarta').and.callThrough();
    juego.iniciarJuego();
    expect(juego.oponente.robarCarta).toHaveBeenCalledTimes(4);
    expect(juego.oponente.mano.length).toBe(4);
    expect(juego.oponente.mazo.length).toBe(16);
  });

  it('Al iniciar un turno, aumenta el maximo de mana del jugador activo.', () => {

    spyOn(juego.oponente, 'robarCarta').and.callThrough();
    juego.iniciarJuego();
    expect(juego.jugadorActivo.contadores_mana).toBe(0);

    for (let i = 0; i < 10; i++) {
      juego.iniciarTurno();
      expect(juego.jugadorActivo.contadores_mana).toBe(i + 1);
    }


  });

  it('Un jugador puede tener maximo 10 contadores de mana.', () => {
    juego.jugadorActivo.contadores_mana = 10;

    for (let i = 0; i < 10; i++) {
      juego.iniciarTurno();
      expect(juego.jugadorActivo.contadores_mana).toBe(10);
    }
  });

  it('Al inicar un turno rellena el mana del jugador activo al maximo.', () => {

    for (let i = 0; i < 10; i++) {
      juego.iniciarTurno();
      expect(juego.jugadorActivo.mana).toBe(juego.jugadorActivo.contadores_mana);
    }
  });

  it('Al inicar un turno el jugador activo roba una carta.', () => {
    spyOn(juego.jugadorActivo, 'robarCarta').and.callThrough();
    juego.iniciarTurno();
    expect(juego.jugadorActivo.robarCarta).toHaveBeenCalled();
  });

  it('Al finalizar un turno se deben intercambiar el jugador activo y el oponente.', () => {
    const jugador1 = juego.jugadorActivo;
    const jugador2 = juego.oponente;

    juego.finalizarTurno();
    expect(juego.jugadorActivo).toEqual(jugador2);
    expect(juego.oponente).toEqual(jugador1);

  });


});
