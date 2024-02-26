
// criou uma variavel com o nome "tempofilme" com o valor de 60
var tempoFilme = 60; // em segundos

// criou uma variavel com o nome "iniciofilme" com o valor de 0
var inicioFilme = 0; // em segundos

// para var t = 0; t é maior que a variavel tempo filme; esqueci oq é t++
for (var t = 0;  t < tempoFilme; t++) {

// esta definindo o fim na function
    setTimeout(function() {

// quando chegar ao fim, o console vai limpar tudo
        console.clear();

// falando pro console mostrar a mensagem "Assistindo filme 60 segundos... Ainda faltam [" 
        console.log("Assistindo filme 60 segundos... Ainda faltam [" + 

// nao lembro
        (tempoFilme - inicioFilme) + "] segundos.");
        inicioFilme++;
    },t*1000);   
}