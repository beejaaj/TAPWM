var http = require('http');
var server = http.createServer( function(req,res){
    var opcao = req.url;
    if(opcao=='/historia'){
        res.end("<html><head><meta charset='UTF-8'></head><body>História da Fatec</body></html>");
        //erro UTF8
    }
    else if(opcao=='/curso'){
        res.end("<html><body>Cursos da Fatec</body></html>");
    }
    else if(opcao=='/professor'){
        res.end("<html><body>Professores da Fatec</body></html>");
    }
    else res.end("<html><body>Site da Fatec Sorocaba</body></html>");
    }); server.listen(3000);