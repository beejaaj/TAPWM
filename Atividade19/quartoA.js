// Função para imprimir a primeira parte
function Parte1(){
    for(var i=1; i<=10; i++){
        console.log("primeira partte:"+i);
    }
}
setTimeout(Parte1, 2000); // 2 segundos atraso
var fs = require('fs');
fs.readFile('file.txt', (err, data)=>{
    if (err) throw err;
    const registros = data.toString().split('\n');
    registros.forEach((registro,index)=>{
        console.log("segunda parte:"+ registro);
    });
});