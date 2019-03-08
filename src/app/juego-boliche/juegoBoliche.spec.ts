import { JuegoBoliche } from './juegoBoliche';

describe('juego-boliche', () => {

  let juegoBoliche: JuegoBoliche;

  beforeEach(() => {

    juegoBoliche = new JuegoBoliche();

  });

  it('Deberia obtener 80 puntos', () => {

    const tiros = 20;
    const pinos = 4;

    jugarLinea(tiros, pinos, juegoBoliche);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(80);
  });

  it('Deberia obtener 0 puntos', () => {

    const tiros = 20;
    const pinos = 0;

    jugarLinea(tiros, pinos, juegoBoliche);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(0);

  });

  it('Debe obtener 150 puntos', () => {

    const tiros = 21;
    const pinos = 5;

    jugarLinea(tiros, pinos, juegoBoliche);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(150);

  });

  it('Debe obtener 155 puntos', () => {

    const tiros = 20;
    const pinos = 5;

    jugarLinea(tiros, pinos, juegoBoliche);
    juegoBoliche.tirar(10);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(155);
  });

  it('Debe obtener 300 puntos', () => {

    const tiros = 12;
    const pinos = 10;

    jugarLinea(tiros, pinos, juegoBoliche);

    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(300);

  });

  it('Debe obtener 299 puntos', () => {

    const tiros = 11;
    const pinos = 10;

    jugarLinea(tiros, pinos, juegoBoliche);
    juegoBoliche.tirar(9);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(299);

  });

  it('Debe obtener 120 puntos', () => {

    juegoBoliche.tirar(10);
    juegoBoliche.tirar(4);
    juegoBoliche.tirar(3);
    juegoBoliche.tirar(5);
    juegoBoliche.tirar(5);
    juegoBoliche.tirar(9);
    juegoBoliche.tirar(1);
    juegoBoliche.tirar(0);
    juegoBoliche.tirar(3);
    juegoBoliche.tirar(6);
    juegoBoliche.tirar(4);
    juegoBoliche.tirar(0);
    juegoBoliche.tirar(10);
    juegoBoliche.tirar(5);
    juegoBoliche.tirar(5);
    juegoBoliche.tirar(2);
    juegoBoliche.tirar(5);
    juegoBoliche.tirar(10);
    juegoBoliche.tirar(4);
    juegoBoliche.tirar(6);

    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(120);

  });

  function jugarLinea(tiros: number, pinos: number, juegoBoliche: JuegoBoliche) {
    for (let i = 0; i < tiros; i++) {
      juegoBoliche.tirar(pinos);
    }
  }

});
