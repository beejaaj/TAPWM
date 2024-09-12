const fs = require('fs');
// https://nodejs.org/api/fs.html
const data = fs.readFileSync('file.txt');
//execução bloqueada até arquivo ser lido
console.log(data.toString());