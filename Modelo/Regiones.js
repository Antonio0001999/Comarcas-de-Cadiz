class Regiones {
    static regiones = [];
    constructor() {}

    crearRegiones(elementos) {
        elementos.forEach(elemento => {
            Regiones.regiones.push(new Region(elemento));
        });
    }

    ver(colorHEX) {
        return Regiones.regiones.find(region => region.color == colorHEX);
    }

}