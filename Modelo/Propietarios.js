class Propietarios {
    static paises = [
        new Propietario("ESP", "España"),
        new Propietario("GBR", "Reino Unido"),
        new Propietario("SDC", "Sierra de Cádiz"),
        new Propietario("CDJ", "Campiña de Jerez"),
        new Propietario("CNO", "Costa Noroeste"),
        new Propietario("BDC", "Bahía de Cádiz"),
        new Propietario("JAN", "La Janda"),
        new Propietario("CDG", "Campos de Gibraltar")
    ];
    
    constructor() { }

    ver(codigo) {
        if(arguments.length == 0) { return [...Propietarios.paises]; }
        else {
            if(codigo == "000") { return null; }
            return Propietarios.paises.find(pais => pais.codigo == codigo);
        }
    }
}