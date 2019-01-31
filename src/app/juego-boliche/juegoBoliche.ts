export class JuegoBoliche {
    private puntosTotales = 0;

    tirar(pinos: number) {
        this.puntosTotales += pinos;
    }

    obtenerPuntuacion(): number {
        return this.puntosTotales;
    }

}
