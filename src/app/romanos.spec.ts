import { Romanos } from './romanos';
import { Decimal } from './decimal';


describe('Romanos', () => {
  it('should create an instance', () => {
    expect(new Romanos()).toBeTruthy();
  });

  it('Numeros Simples', () => {
    const instancia = new Romanos();
    expect(instancia.convertirRomanos(1)).toBe('I');
    expect(instancia.convertirRomanos(5)).toBe('V');
    expect(instancia.convertirRomanos(10)).toBe('X');
    expect(instancia.convertirRomanos(50)).toBe('L');
    expect(instancia.convertirRomanos(100)).toBe('C');
    expect(instancia.convertirRomanos(500)).toBe('D');
    expect(instancia.convertirRomanos(1000)).toBe('M');
  });

  it('Numeros Repetidos', () => {
    const instancia = new Romanos();
    expect(instancia.convertirRomanos(2)).toBe('II');
    expect(instancia.convertirRomanos(3)).toBe('III');
    expect(instancia.convertirRomanos(20)).toBe('XX');
    expect(instancia.convertirRomanos(30)).toBe('XXX');
    expect(instancia.convertirRomanos(200)).toBe('CC');
    expect(instancia.convertirRomanos(300)).toBe('CCC');
    expect(instancia.convertirRomanos(2000)).toBe('MM');
    expect(instancia.convertirRomanos(3000)).toBe('MMM');
  });

  it('Numeros Romanos a Decimal', () => {
    const instancia = new Decimal();
    expect(instancia.convertirDecimal('I')).toBe(1);
    expect(instancia.convertirDecimal('V')).toBe(5);
    expect(instancia.convertirDecimal('X')).toBe(10);
    expect(instancia.convertirDecimal('L')).toBe(50);
    expect(instancia.convertirDecimal('C')).toBe(100);
    expect(instancia.convertirDecimal('D')).toBe(500);
    expect(instancia.convertirDecimal('M')).toBe(1000);
    expect(instancia.convertirDecimal('MDCLXVI')).toBe(1666);
    expect(instancia.convertirDecimal('IV')).toBe(4);
    expect(instancia.convertirDecimal('MCMXCIX')).toBe(1999);
    expect(instancia.convertirDecimal('LXIV')).toBe(64);


  });

});

