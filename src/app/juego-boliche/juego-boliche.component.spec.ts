import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoBoliche } from './juegoBoliche';

import { JuegoBolicheComponent } from './juego-boliche.component';

describe('JuegoBolicheComponent', () => {
  let component: JuegoBolicheComponent;
  let fixture: ComponentFixture<JuegoBolicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoBolicheComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(JuegoBolicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia obtener 80 puntos', () => {
    const juegoBoliche = new JuegoBoliche();
    const tiros = 20;
    const pinos = 4;

    jugarLinea(tiros, juegoBoliche, pinos);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(80);
  });

  it('Deberia obtener 0 puntos', () => {
    const juegoBoliche = new JuegoBoliche();
    const tiros = 20;
    const pinos = 0;

    jugarLinea(tiros, juegoBoliche, pinos);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(0);
  });

  it('Debe obtener 150 puntos', () => {
    const juegoBoliche = new JuegoBoliche();
    const tiros = 21;
    const pinos = 5;

    jugarLinea(tiros, juegoBoliche, pinos);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(150);
  });

  it('Debe obtener 155 puntos', () => {
    const juegoBoliche = new JuegoBoliche();
    const tiros = 20;
    const pinos = 5;

    jugarLinea(tiros, juegoBoliche, pinos);
    juegoBoliche.tirar(10);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(155);
  });

  it('Debe obtener 300 puntos', () => {
    const juegoBoliche = new JuegoBoliche();
    const tiros = 12;
    const pinos = 10;

    jugarLinea(tiros, juegoBoliche, pinos);

    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(300);

  });

  it('Debe obtener 299 puntos', () => {
    const juegoBoliche = new JuegoBoliche();
    const tiros = 11;
    const pinos = 10;

    jugarLinea(tiros, juegoBoliche, pinos);
    juegoBoliche.tirar(9);
    const puntos = juegoBoliche.obtenerPuntuacion();
    expect(puntos).toBe(299);

  });

  it('Debe obtener 120 puntos', () => {

    const juegoBoliche = new JuegoBoliche();

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

  function jugarLinea(tiros: number, juegoBoliche: JuegoBoliche, pinos: number) {
    for (let i = 0; i < tiros; i++) {
      juegoBoliche.tirar(pinos);
    }
  }

});
