	/*quando tem erro na imagem carregada/quebrada - evento jquery*/
$(function(){
	$('img').on("error",function(){
		$('img').attr("src","img/error.jpg");
		
	});
});



	/*quando tem erro na imagem carregada/quebrada - evento html*/
		
	function imgError(image) {
	    image.onerror = "";
	    image.src = "img/error.jpg";
	    return true;
	};
	
	function clicar(){
		
		var num1 = document.querySelector(".n1").value;
		var num2 = document.querySelector(".n2").value;
	
		var resultado = parseInt(num1)+parseInt(num2);
	

	
		if(num1 <1 || num2< 0){
			
			document.write("Pelo menos um dos valores está vazio ou é menor do que zero");
			return;
		} 
		
		if (num2>num1  && num2-num1 > 0|| num1-num2<18){
			document.write("Tempo de contribuição inválido");
			return;
		}
		
		if(num1 < 18){
			document.write("Somente idades superiores a 18 anos");
			return;
		} else if(num1 > 100){
			document.write("Somente idades com menos de 100 anos");
			return;
			
		} else if(num2 < 15){
			document.write("Tempo de contribuição mínimo de 15 anos");
			return;
			
			
		} else if(sexo="Fem"){
			
			if(resultado >= 85){
				document.write("Parabéns, Vovó! Já pode se aposentar");	
				 document.getElementById('vovoh');
				
				
				
			} else {
				var dif = 85 - resultado;
				document.write("Que pena vovó... ainda faltam " + dif/2 + " anos");
				
			}
			
		} else {
			
			if(resultado >= 95){
				document.write("Parabéns, Vovô! Já pode se aposentar");
				var aposent = 2;
				
				
			} else {
				var dif = 95 - resultado
				document.write("Que pena vovô... ainda faltam " + dif/2 + " anos");
				
			
			
		}
		
		}
	
	return;
	};
	
