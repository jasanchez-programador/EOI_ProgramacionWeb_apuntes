$(document).ready(function(){
	var p = null;
	$('#crear').on('click',function(){
		p = new Punto2D();
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