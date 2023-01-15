var imagenes = [];
imagenes["Vacamon"] = "vaca.png";
imagenes["Pollomon"] = "pollo.png";
imagenes["Tocinomon"] = "cerdo.png";


class Pakiman
{
  constructor(n, v, a, t)
  {
    this.imagen = new Image();
    this.nombre=n;
    this.vida=v;
    this.ataque=a;
    this.tipo=t;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar()
  {
    alert(this.nombre);
  }
  mostrar()
  {
    document.body.appendChild(this.imagen);
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong><br />")
    document.write("<strong>Vida:</strong> " + this.vida + "<br />");
    document.write("<strong>Ataque:</strong> " + this.ataque + "<br />");
    document.write("<strong>Tipo:</strong> " + this.tipo + "<br />");
    document.write("</p> <hr />");
  }
}

var cauchin = new Pakiman("Vacamon", 100, 30, "Hierba");
var pokacho = new Pakiman("Pollomon", 80, 50, "Fuego");
var tocinauro = new Pakiman("Tocinomon", 120, 40, "Tierra");

pokacho.mostrar();
cauchin.mostrar();
tocinauro.mostrar();
