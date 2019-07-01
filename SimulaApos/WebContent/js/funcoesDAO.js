/*$(function(){
	$('#btn1').on("click",function(){
	var sexo = document.getElementById("sexo").value;
	document.querySelector("#resultado").innerHTML = sexo;
	});
});*/

$(function(){
		$('#btn1').on("click",function(){
			var num1 = document.querySelector(".n1").value;
			var num2 = document.querySelector(".n2").value;
		
			var resultado = parseInt(num1)+parseInt(num2);
			
			var sexo = document.getElementById("sexo").value;
			document.querySelector("#p1").innerHTML = sexo;
			
			if(num1 <1 || num2< 0){
				
				alert("Pelo menos um dos valores está vazio ou é menor do que zero");
				return;
			}
			
			if (num2>num1  && num2-num1 > 0|| num1-num2<18){
				alert("Tempo de contribuição inválido");
				return;
			}
			
			if(num1 < 18){
				alert("Somente idades superiores a 18 anos");
				return;
				
			} else if(num1 > 100){
				alert("Somente idades com menos de 100 anos");
				return;
				
			} else if(num2 < 15){
				alert("Tempo de contribuição mínimo de 15 anos");
				
				return;
			}

			
			if($('#p1').value="Fem"){
				
					if(resultado >= 85){
					document.querySelector("#resultado").innerHTML = "Parabéns, Vovó! Ja pode se aposentar";
					document.getElementById("aposent").src="img/vovoh.jpg";
					
				} else {
					var dif = 85 - resultado;
					document.querySelector("#resultado").innerHTML ="Que pena... ainda faltam " + dif/2 + " anos de labuta";
					document.getElementById("aposent").src="img/vovohtriste.jpg";
					
				} 
					return;
				}
				
				else if ($('#p1').value="Masc") {
				 if(resultado >= 95){
					document.querySelector("#resultado").innerHTML  = "Parabéns, Vovô! Ja pode se aposentar";
					document.getElementById("aposent").src="img/vovo.jpg";
					
					
				} else {
					var dif = 95 - resultado
					document.querySelector("#resultado").innerHTML  = "Que pena... ainda faltam " + dif/2 + " anos de labuta";
					document.getElementById("aposent").src="img/vovotriste.jpg";
					
				
			}
			return;
			}
		
			
				
		});
		
	
	});


$(window).load(function(){
		
		/*quando tem erro na imagem carregada/quebrada - evento jquery*/
	$('img').on("error",function(){
		$('img').attr("src","img/error.jpg");
		
	});


		
	})
	
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
			
				document.write("Parabéns, Vovó! Ja pode se aposentar");	
				setTimeout( "loadimagem()", 1 );
				
				
			} else {
				var dif = 85 - resultado;
				document.write("Que pena... ainda faltam " + dif/2 + " anos");
				
			}
			
		} else {
			
			if(resultado >= 95){
				document.write("Parabéns, Vovô! Ja pode se aposentar");
			
				
				
			} else {
				var dif = 95 - resultado
				document.write("Que pena... ainda faltam " + dif/2 + " anos");
				
			
			
		}
		
		}
	
	return;
	


	};
	

/*
	quando tem erro na imagem carregada/quebrada - evento html
		
	function imgError(image) {
	    image.onerror = "";
	    image.src = "img/error.jpg";
	    return true;
	};
	

	function imagemErro(){
		
		 var elemento = document.getElementById("para1");
		
	});
		

	var carregar;
	function loadImagem( img )
	{
	    carregar = new Image();
	    carregar.src = img;
	    document.getElementById("sua_div").innerHTML = "Carregando...";
	    setTimeout( "verificaCarregamento()", 1 );
	};
	 
	function verificaCarregamento()
	{
	    if( carregar.complete )
	    {
	        document.getElementById("sua_div").innerHTML = "<img src=img/vovoh.jpg>" 
	                + carregar.src;
	    }
	    else
	    {
	        setTimeout( "verificaCarregamento()", 1 );
	    }
	};
	*/

	
