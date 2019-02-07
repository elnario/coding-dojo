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

            if ((this.tiros[index] + this.tiros[index + 1]) === 10) {
                this.puntosTotales += 10 + this.tiros[index + 2];
            } else {
                this.puntosTotales += this.tiros[index] + this.tiros[index + 1];
            }

            index += 2;
            entradas++;

        }
        return this.puntosTotales;
    }

}
