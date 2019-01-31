export class Decimal {
    convertirDecimal(numeroRomano: string): number {
        return this.numeroDecimal(numeroRomano);
    }


    numeroDecimal(numeroRomano: string): number {

        let valorDecimal = 0;
        let valorTemp = numeroRomano;

        const numerosRomanos = [
            { romano: 'M', numero: 1000 },
            { romano: 'CM', numero: 900 },
            { romano: 'D', numero: 500 },
            { romano: 'CD', numero: 400 },
            { romano: 'C', numero: 100 },
            { romano: 'XC', numero: 90 },
            { romano: 'L', numero: 50 },
            { romano: 'XL', numero: 40 },
            { romano: 'X', numero: 10 },
            { romano: 'IX', numero: 9 },
            { romano: 'V', numero: 5 },
            { romano: 'IV', numero: 4 },
            { romano: 'I', numero: 1 }
        ];

        for (let i = 0; i < valorTemp.length; i++) {
            const letraActual = valorTemp[i];
            const letraSiguiente = (i + 1) >= valorTemp.length ? letraActual : valorTemp[i + 1];
            let valorActual = 0;
            let valorSiguiente = 0;

            numerosRomanos.forEach(element => {
                if (letraActual === element.romano) {
                    valorActual = element.numero;
                }
                if (letraSiguiente === element.romano) {
                    valorSiguiente = element.numero;
                }
            });

            if (valorActual < valorSiguiente) {
                valorActual *= -1;
            }
            valorDecimal += valorActual;
        }
        return valorDecimal;
    }

}
