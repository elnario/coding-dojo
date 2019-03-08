import { Jugador } from './jugador';

describe('trading-card-game', () => {
  describe('Jugador', () => {
    let jugador: Jugador;

    beforeEach(() => {

      jugador = new Jugador('Juan');

    });

    it('Debe Tener Nombre', () => {
      expect(jugador.nombre).toBe('Juan');

    });

    it('Debe Tener 30 Vidas', () => {
      expect(jugador.vidas).toBe(30);

    });

    it('Debe Tener 1 mazo de 20 cartas', () => {
      expect(jugador.mazo).toEqual([0, 0, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 7, 8]);
    });


    it('Debe Iniciar con una mano vacia', () => {
      expect(jugador.mano).toEqual([]);

    });

    it('Debe Iniciar con un nivel de mana vacio', () => {
      expect(jugador.mana).toBe(0);

    });

    it('Debe iniciar con un cero contadores de mana', () => {
      expect(jugador.contadores_mana).toBe(0);

    });

    it('Al robar una carta mueve la carta al tope del mazo a tu mano', () => {
      jugador.mazo = [1, 2, 3];
      jugador.mano = [4, 5];
      jugador.robarCarta();

      expect(jugador.mazo).toEqual([2, 3]);
      expect(jugador.mano).toEqual([4, 5, 1]);

    });

    it('Descarta una carta cuando robas y tienes 5 cartas en mano', () => {
      jugador.mazo = [1, 2, 3];
      jugador.mano = [4, 5, 6, 7, 8];
      jugador.robarCarta();

      expect(jugador.mazo).toEqual([2, 3]);
      expect(jugador.mano).toEqual([4, 5, 6, 7, 8]);

    });

    it('Si no puedes robar carta, pierdes una vida', () => {
      jugador.mazo = [];
      jugador.vidas = 5;
      jugador.robarCarta();

      expect(jugador.vidas).toBe(4);

    });

    it('Al jugar una carta de daño, el oponente pierde vidas igual al valor de la carta', () => {
      const oponente = new Jugador('yugi');

      oponente.vidas = 10;
      jugador.jugarCarta(7, oponente);

      expect(oponente.vidas).toBe(3);

    });

    it('Al jugar una carta de daño, el jugador pierde mana igual al valor de la carta', () => {
      const oponente = new Jugador('yugi');

      oponente.vidas = 10;
      jugador.mana = 7;

      jugador.jugarCarta(7, oponente);

      expect(jugador.mana).toBe(0);

    });


    it('Al jugar una carta de daño, se descarta de la mano', () => {
      const oponente = new Jugador('yugi');

      oponente.vidas = 10;
      jugador.mana = 7;
      jugador.mano = [1, 3, 7];

      jugador.jugarCarta(7, oponente);

      expect(jugador.mano).toEqual([1, 3]);

    });

    it('Al barajar el mazo, cambia el orden de las cartas', () => {

      const mazo = [1, 2, 3, 4, 5, 1];
      jugador.mazo = mazo.slice(0);
      jugador.barajarMazo();

      expect(jugador.mazo).not.toEqual(mazo);
      expect(jugador.mazo.length).toBe(mazo.length);
      expect(mazo.every(e => jugador.mazo.indexOf(e) !== -1)).toBe(true);

    });


  });
});
