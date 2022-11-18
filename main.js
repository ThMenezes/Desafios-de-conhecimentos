
function resultado(){

	var total = 5;
	var pontuacao = 0;

	var q1 = document.forms.quizForm.questao1.value;
	var q2 = document.forms.quizForm.questao2.value;
	var q3 = document.forms.quizForm.questao3.value;
	var q4 = document.forms.quizForm.questao4.value;
	var q5 = document.forms.quizForm.questao5.value;
  
  for(i = 1; i <= total; i++){
  	var quiz = eval('q' + i)

		if (quiz == null || quiz =='' || quiz == undefined){
		alert("Você não respondeu o quiz " + i);
		return false;
	}
}
  var respostas = ["d","b","c","a","b"]

	if(q1 == respostas[0]){
		pontuacao++;
	}	
	if(q2 == respostas[1]){
		pontuacao++;
	}	
	if(q3 == respostas[2]){
		pontuacao++;
	}
	if(q4 == respostas[3]){
		pontuacao++;
	}
	if(q5 == respostas[4]){
		pontuacao++;
	}

	document.getElementById("reload").style.display="block"
	document.getElementsByName("quizForm")[0].style.display="none"
	document.getElementById("resultado").innerHTML = `Você marcou ${pontuacao} de ${total} `; 
						
}