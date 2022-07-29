class Region {
    constructor(img) {
        let pais = new Propietarios();
        this.codigo = img.getAttribute("id");
        this.pais = pais.ver(img.getAttribute("propietario"));
        this.tipo = img.getAttribute("tipo");
        this.nombre = img.getAttribute("nombre");
        this.imagen = img.getAttribute("src");
        this.color = img.getAttribute("hex");
    }

    toString() {
        let texto = this.nombre;
        if(this.pais !== null) { texto += ` (${this.pais.toString()})`; }

        return texto;
    }
}