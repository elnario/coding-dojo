export class JuegoBoliche {
    private puntosTotales = 0;
    private tiros: number[] = [];

    tirar(pinos: number) {
        this.tiros.push(pinos);
    }

    obtenerPuntuacion(): number {

        let index = 0;
        let entradas = 1;
        while (entradas <= 10) {

            if (this.esChuza(index)) {
                this.puntosTotales += 10 + this.tiros[index + 1] + this.tiros[index + 2];
                index += 1;
            } else if (this.esSpare(index)) {
                this.puntosTotales += 10 + this.tiros[index + 2];
                index += 2;
            } else {
                this.puntosTotales += this.tiros[index] + this.tiros[index + 1];
                index += 2;
            }

            entradas++;

        }
        return this.puntosTotales;
    }


    private esSpare(index: number) {
        return (this.tiros[index] + this.tiros[index + 1]) === 10;
    }

    private esChuza(index: number) {
        return this.tiros[index] === 10;
    }
}
