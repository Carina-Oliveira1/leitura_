function nomec()
		{
			var valor = document.getElementById('nome');
	
			if(valor.value.length < 3)
			{
				alert("O nome deve ter pelo menos 3 caracteres.");
			}
		}

		function emailc()
		{
			var valor2 = document.getElementById('email1');
	
			if(valor2.value.length < 5)
			{
				alert("O e-mail deve ter pelo menos 5 caracteres.");
			}
		}

		function msgc()
		{
			var valor3 = document.getElementById('msg');
	
			if(valor3.value.length < 5)
			{
				alert("O mínimo de caracteres neste campo é 5.");
			}
			else if(valor3.value.length > 200)
			{
				alert("O máximo de caracteres neste campo é 200.");
			}
		}

		function enviada()
		{
			alert("Mensagem enviada com sucesso!");
		}
