var objetos = new Array();
objetos[0] = "img/01.jpg";
objetos[1] = "img/02.jpg";
objetos[2] = "img/03.jpg";
objetos[3] = "img/04.jpg";
objetos[4] = "img/05.jpg";
objetos[5] = "img/06.jpg";
objetos[6] = "img/07.jpg";
objetos[7] = "img/08.jpg";
objetos[8] = "img/09.jpg";
objetos[9] = "img/010.jpg";

function aleatorio() {
	var azar = Math.floor(Math.random() * objetos.length);
	document.images["imagen"].src = objetos[azar];
}
