
	function clicar(){
		
		var num1 = document.querySelector(".n1").value;
		var num2 = document.querySelector(".n2").value;
	
		var resultado = parseInt(num1)+parseInt(num2);
		var dif = 85 - resultado;
	/*	document.querySelector(".resultado").innerHtml = resultado;*/
		
		if(num1 < 18){
			document.write("Somente idades superiores a 18 anos");
			return;
		} else if(num1 > 100){
			document.write("Somente idades com menos de 100 anos");
			return;
			
		} else if(num2 < 15){
			document.write("Tempo de contribuição mínimo de 15 anos");
			
		} else if(sexo="Fem"){
			
			if(resultado >= 85){
				document.write("Parabéns, Vovó! Já pode se aposentar");
				
			} else {
			
				document.write("ainda faltam " + dif + " anos");
				
			}
			
		} else {
			
			if(resultado >= 95){
				document.write("Parabéns, Vovô! Já pode se aposentar");
				
			} else {
				var dif = 95 - resultado
				document.write("ainda faltam " + dif + " anos");
				
			
			
		}
		
		}
	
	
	};
	


