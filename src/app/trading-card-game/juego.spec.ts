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

});
