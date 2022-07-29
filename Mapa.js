let paises = new Propietarios();
let regiones = new Regiones();

let base, canvas, info, mapa, marca;

window.addEventListener("load", main);
window.onbeforeunload = () => { window.scrollTo(0, 0); }

function main() {
    base = document.querySelector("#base");
    info = document.querySelector("#info");
    mapa = document.querySelector("#mapa");
    marca = document.querySelector("#marca");
    regiones.crearRegiones(document.querySelector("#regiones").querySelectorAll("img"));
    
    // CANVAS
    canvas = document.createElement("canvas");
    canvas.width = base.width; canvas.height = base.height;
    let bordes = mapa.getBoundingClientRect();
    canvas.getContext("2d").drawImage(base, bordes.left, bordes.top, base.width, base.height);

    mapa.addEventListener("click", seleccion);
}

function seleccion(e) {
    var bordes = mapa.getBoundingClientRect();
    var x = e.clientX - bordes.left;
    var y = e.clientY - bordes.top;

    let color = colorPulsado(x, y);
    let region = regiones.ver(color);
    if(region == undefined) { marca.setAttribute("src", ""); }
    else {
        marca.setAttribute("src", region.imagen);
        mostrar(region.toString());
    }
    console.log(`(${x}, ${y}) -> ${color}`);
}

function colorPulsado(x, y) {
    let pixel = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
    return HEX(pixel[0], pixel[1], pixel[2]);
}

function mostrar(mensaje) { info.innerHTML = mensaje; }
function HEX(r, g, b) { return "#" + HEXParcial(r) + HEXParcial(g) + HEXParcial(b); }
function HEXParcial(c) { var hex = c.toString(16); return hex.length == 1 ? "0" + hex : hex; }