import { Jugador } from './jugador';

describe('Jugador', () => {
  let jugador: Jugador;

  beforeEach(() => {

    jugador = new Jugador('Juan');

  });

  it('Debe Tener Nombre', () => {
    expect(jugador.nombre).toBe("Juan");

  });

  it('Debe Tener 30 Vidas', () => {
    expect(jugador.vidas).toBe(30);

  });

  it('Debe Tener 1 mazo de 20 cartas', () => {
    expect(jugador.mazo).toEqual([0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8]);
  });

});