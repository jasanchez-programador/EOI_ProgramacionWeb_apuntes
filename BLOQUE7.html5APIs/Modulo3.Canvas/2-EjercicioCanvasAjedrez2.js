$(document).ready(function(){
	// establecemos contexto
	var tablero = $('canvas#tablero');
	var contextoTablero = tablero[0].getContext('2d');

	// para los colores alternos
	var color = true;
	// texto de inicio
	var texto = "Ajedrez con canvas";
	contextoTablero.fillStyle = "DarkRed";
	contextoTablero.font = "25px Arial";
	contextoTablero.fillText(texto, 150, 20);
	contextoTablero.font = "15px Arial";

	// pintar los numeros arriba y derecha
	for (i=1; i<=8; i++){
		color = !color;
		texto = i;
		contextoTablero.fillStyle = "Black";
		contextoTablero.fillText(texto,20 + 50 * i, 45);
		contextoTablero.fillText(texto, 35, 25 + 50 * i);
		// Pintar los cuadrados de 2 colores
		for (j=1; j<=8; j++){
			if (color) {
				contextoTablero.fillStyle = "lightgrey";
				color = false;
			}
			else{
				contextoTablero.fillStyle = "darkorange";
				color = true;	
			}
			contextoTablero.fillRect(i*50, j*50, 50, 50);
		}
	}
});