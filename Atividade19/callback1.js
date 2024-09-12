const prompt = require('prompt-sync')();
// não esquecer de instalar
// npm install prompt-sync
function saudacao(nome){
    console.log(' OI '+nome);
} function entradaNome(callback){
    var nome = prompt('Digite seu nome:');
    callback(nome); //chamando função callback (saudação)
}
entradaNome(saudacao);

//obtém nome via prompt. Chama função de retorno como parâmetro