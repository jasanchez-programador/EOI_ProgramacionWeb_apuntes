window.onload = function(){
	// VER LA JERARQUIA DE <ul> POR CONSOLA
	var lista = document.getElementsByTagName('ul')[0]
	console.log("Yo soy este HTML: ")
	console.log("\t" + lista.outerHTML);
	
	console.log("Mi contenido HTML es: ")
	console.log("\t" + lista.innerHTML);

	console.log("El contenido HTML de mi padre es: ")
	console.log("\t" + lista.parentNode.innerHTML);

	console.log("El contenido HTML de mi PRIMER hijo es: ")
	console.log("\t" + lista.firstElementChild.innerHTML);
	console.log("El contenido HTML de mi ULTIMO hijo es: ")
	console.log("\t" + lista.lastElementChild.innerHTML);

	console.log("El contenido HTML de todos mis hijos son: ");
	for (var h in lista.children){
		if ( ! isNaN(h)){// si la clave es numerica
			console.log("\t" + h +": "+lista.children[h].innerHTML);
		}
	}

	// MODIFICAR EL DOM
	var miParrafo = document.createElement("p");
	// SEGUNDO: añadimos atributo name
	miParrafo.setAttribute("name","mip");
	//TERCERO: creamos elemento texto
	var contenido = document.createTextNode("hola mundo");
	// CUARTO: añadir texto al parrafo
	miParrafo.appendChild(contenido);
	// QUINTO: añadir parrafo al final del body
	document.body.appendChild(miParrafo);

	/*
	SEGUNDO añadir boton entre 2 parrafos
	*/
	// PRIMERO: quien es el padre de mi parrafo
	var padreMiParrafo = miParrafo.parentNode;
	// SEGUNDO: crear boton
	var boton = document.createElement("input");
	boton.setAttribute("type","button");
	boton.setAttribute("name","boton");
	boton.setAttribute("value","boton");
	// TERCERO: insertarlo
	padreMiParrafo.insertBefore(boton,miParrafo);


	/*
Modificar el color del parrafo insertado
	*/
	// PRIMERO: Crear nuevo parrafo
	var nuevoParrafo = document.createElement("p");
	nuevoParrafo.setAttribute("name","nuevoP");
	nuevoParrafo.setAttribute("style","color: Orange");
	var nuevoTexto = document.createTextNode("nuevo Texto");
	nuevoParrafo.appendChild(nuevoTexto);
	// SEGUNDO: sustituir desde el padre
	padreMiParrafo.replaceChild(nuevoParrafo,miParrafo);

	/*
Quitar el parrafo inicial
	*/
	// PRIMERO: quitar el parrafo inicial
	var parrafo = document.getElementsByTagName("p")
	parrafo[2].parentNode.removeChild(parrafo[2]);

	/*
Modificar el estilo del parrafo que queda envolviendolo en <h1> y 
color de fondo negro
	*/
	// PRIMERO: incluir cabecera <h1>
	var queEs = nuevoParrafo.outerHTML;
	nuevoParrafo.outerHTML = '<h1>' + queEs + '</h1>';
	// actualizamos el estilo del parrafo
	var miParrafoMod = document.getElementsByName("nuevoP")[0];
	if (miParrafoMod.hasAttribute("style")){
		var valorAttrActual = miParrafoMod.getAttribute("style");
		var valorAttrIncluir =  "; background: black;";
		var valorAttr = valorAttrActual + valorAttrIncluir;
		miParrafoMod.setAttribute("style", valorAttr);
	}

	// accediendo a los atributos de HTML como atributos de JS

	// poner un titulo para mostrar al poner el raton encima!!
	//miParrafoMod.title = "el ultimo cambio con JS";
	// limitar su anchura al 50%
	// poner un borde rojo al parrafo final y 
	//miParrafoMod.style.width = "50%";
	miParrafoMod.style.border = "2px solid darkRed"; 
}