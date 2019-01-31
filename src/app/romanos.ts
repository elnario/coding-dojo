
export class Romanos {
    convertirRomanos(numeroDecimal: number): string {

        return this.numeroRomano(numeroDecimal);
    }

    numeroRomano(numeroDecimal: number): string {

        let valorNumRomano = '';
        let valorTemp = numeroDecimal;

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

        numerosRomanos.forEach(element => {

            while (valorTemp >= element.numero) {

              
                valorNumRomano += element.romano;
                valorTemp -= element.numero;
            
            }
        });

        return valorNumRomano;
    }

}
