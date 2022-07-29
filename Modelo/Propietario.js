class Propietario {
    constructor(codigo, nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.regiones = [];
    }

    controla(region) {
        this.regiones.push(region);
    }

    toString() {
        return this.nombre;
    }
}