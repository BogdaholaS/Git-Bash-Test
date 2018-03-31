var name = prompt("What's your name?");
if(name == ''){
	alert('Bye.')
}else{
	var CorrectAnswers = 0;
	for( var i = 0; i < 5; i++ ){
		var randomNum_1 = Math.ceil( (Math.random() * 9) + 1);
		var randomNum_2 = Math.ceil( (Math.random() * 9) + 1);
		var example = parseInt(prompt( randomNum_1 + ' + ' + randomNum_2 + ' = '));
		var result = randomNum_1 + randomNum_2;
		if (example == result)
			CorrectAnswers++;	
	}

switch(CorrectAnswers) {
    case 1: alert('Terrible , ' + name + '!'); break;
    case 2: alert('Bad , ' + name + '.'); break;
    case 3: alert('Not bad, ' + name + '.'); break;
    case 4: alert('Good , ' + name + '.'); break;
    case 5: alert('Excellent , ' + name + '!'); break;
    default:alert("OMG!You're very bad at math , " + name + "."); break;
}
}
















