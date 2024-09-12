function exibeMensagensNaOrdem(mensagem, callback){
    console.log(mensagem);
    callback();
}
exibeMensagensNaOrdem('Essa é a primeira mensagem exi bida na ordem', function(){
    console.log('Essa é a segunda mensagem exibida');
});