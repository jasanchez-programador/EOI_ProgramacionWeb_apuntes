$(document).ready(function(){

	$('#s').on('click',function(){
		try{
			$('#res').val(Calc.suma($('#n1').val(),$('#n2').val()));
		}
		catch(e){
			alert(e.message)
		}
	});

	$('#r').on('click',function(){
		try{
			$('#res').val(Calc.resta($('#n1').val(),$('#n2').val()));
		}
		catch(e){
			alert(e.message)
		}
	});

	$('#m').on('click',function(){
		try{
			$('#res').val(Calc.multiplicacion($('#n1').val(),$('#n2').val()));
		}
		catch(e){
			alert(e.message)
		}
	});

	$('#d').on('click',function(){
		try{
			$('#res').val(Calc.division($('#n1').val(),$('#n2').val()));
		}
		catch(e){
			alert(e.message)
		}
	});

	$('#p').on('click',function(){
		try{
			$('#res').val(Calc.Cientifica.potencia($('#n1').val(),$('#n2').val()));
		}
		catch(e){
			alert(e.message)
		}
	});
})