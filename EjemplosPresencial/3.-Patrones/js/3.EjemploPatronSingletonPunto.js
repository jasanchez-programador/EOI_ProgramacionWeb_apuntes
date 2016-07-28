$(document).ready(function(){
	var p = null;
	$('#crear').on('click',function(){
		p = new Punto2D();
		// Si quiero que empiece en otra posicion diferente a 0,0
		// lo simulo moviendo X e Y
		$('#res').val(p.toString());
	})
	$('#mover').on('click',function(){
		var x = $('#x').val();
		var y = $('#y').val();
		p.moverX(x);
		p.moverY(y);
		$('#res').val($('#res').val() + "\n" + p.toString());
	})
})