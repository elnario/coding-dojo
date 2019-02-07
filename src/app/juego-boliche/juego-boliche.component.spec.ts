import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegoBoliche } from './juegoBoliche';

import { JuegoBolicheComponent } from './juego-boliche.component';

describe('JuegoBolicheComponent', () => {
  let component: JuegoBolicheComponent;
  let fixture: ComponentFixture<JuegoBolicheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [JuegoBolicheComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoBolicheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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

function jugarLinea(tiros: number, juegoBoliche: JuegoBoliche, pinos: number) {
  for (let i = 0; i < tiros; i++) {
    juegoBoliche.tirar(pinos);
  }
}

