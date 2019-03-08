import { Romanos } from './romanos';

describe('numeros-romanos', () => {

  let romanos:Romanos;

  beforeEach(()=>{

    romanos = new Romanos();

  });

  it('Numeros Simples', () => {

    expect(romanos.convertirRomanos(1)).toBe('I');
    expect(romanos.convertirRomanos(5)).toBe('V');
    expect(romanos.convertirRomanos(10)).toBe('X');
    expect(romanos.convertirRomanos(50)).toBe('L');
    expect(romanos.convertirRomanos(100)).toBe('C');
    expect(romanos.convertirRomanos(500)).toBe('D');
    expect(romanos.convertirRomanos(1000)).toBe('M');

  });

  it('Numeros Repetidos', () => {

    expect(romanos.convertirRomanos(2)).toBe('II');
    expect(romanos.convertirRomanos(3)).toBe('III');
    expect(romanos.convertirRomanos(20)).toBe('XX');
    expect(romanos.convertirRomanos(30)).toBe('XXX');
    expect(romanos.convertirRomanos(200)).toBe('CC');
    expect(romanos.convertirRomanos(300)).toBe('CCC');
    expect(romanos.convertirRomanos(2000)).toBe('MM');
    expect(romanos.convertirRomanos(3000)).toBe('MMM');

  });

  it('Numeros Romanos a Decimal', () => {
    
    expect(romanos.convertirDecimal('I')).toBe(1);
    expect(romanos.convertirDecimal('V')).toBe(5);
    expect(romanos.convertirDecimal('X')).toBe(10);
    expect(romanos.convertirDecimal('L')).toBe(50);
    expect(romanos.convertirDecimal('C')).toBe(100);
    expect(romanos.convertirDecimal('D')).toBe(500);
    expect(romanos.convertirDecimal('M')).toBe(1000);
    expect(romanos.convertirDecimal('MDCLXVI')).toBe(1666);
    expect(romanos.convertirDecimal('IV')).toBe(4);
    expect(romanos.convertirDecimal('MCMXCIX')).toBe(1999);
    expect(romanos.convertirDecimal('LXIV')).toBe(64);

  });

});

