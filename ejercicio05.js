var ganeLaCarrera = true;
var mensajeGane = "";

if (ganeLaCarrera) {
mensajeGane = "Ganaste :) "

} else	{
	mensajeGane = "Looser"
}

console.log ("Gané la carrera? - " + mensajeGane);

console.log("---------------------------------");

var posicionEnLaCarrera = 2;
var mensajePosicion = "";


if (posicionEnLaCarrera == 1) {
mensajePosicion = "FELICITACIONES, SALISTE 1RO";
} else if (posicionEnLaCarrera == 2) {
	mensajePosicion = "Te falto poquito para ganar";
} else if (posicionEnLaCarrera == 3) {
	mensajePosicion = "Sos un orgullo para tu familia";
} else if (posicionEnLaCarrera > 4) {
	mensajePosicion = "Volvé a tu casa";
} else if (posicionEnLaCarrera > 5) {
	mensajePosicion = "No tires fruta";
}

console.log("En qué posición quedé? " + mensajePosicion);