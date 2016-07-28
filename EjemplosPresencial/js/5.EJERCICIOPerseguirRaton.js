window.onload = function(){
	/*
	Al hacer PINCHAR creo un div donde indica su posicion
	*/
	document.onmousedown = function(e){
		var d = document.createElement('div');
		d.innerText = "("+e.pageX+","+e.pageY+")";
		d.setAttribute("class","flota ");
		d.style.left = e.pageX+"px";
		d.style.top = e.pageY+"px";
		document.body.appendChild(d);
		/*
		al mover el raton CON EL RATON TODAVIA PINCHADO 
		se mueve el div actualizando la posicion en su contenido
		HASTA que se suelta el boton
		*/
		document.onmousemove = function(e2){
			d.innerText = "("+e2.pageX+","+e2.pageY+")";
			d.style.left = e2.pageX+"px";
			d.style.top = e2.pageY+"px";
		}	
	}
	/*
	al soltar el raton vaciamos la funcion de onmousemove
	*/
	document.onmouseup = function(e){
		document.onmousemove = null;
	}

	/*
	La foto siempre se mueve en vertical con el scroll del body
	y da la sensación de estar fijo en la esquina superior izquierda
	*/
	var img = document.getElementsByTagName("img")[0];
	img.style.top = document.body.scrollTop;
}
