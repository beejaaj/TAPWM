var express = require('express');
var app=express();
app.set('view engine', 'ejs');
app.get('/', function(req,res){
    res.render("home/index");
    //res.send("<html><head><meta charset='utf-8'></head><body>Site da Fatec</body></html>");
});
app.get('/form-add-usuario', function(req,res){
    res.render("admin/adicionar_usuario");
})
app.get('/informacao/cursos', function(req,res){
    //res.send("<html><head><meta charset='utf-8'></head><body>Site de Cursos</body></html>");
    res.render("informacao/cursos");
});
app.listen(3000, function(){
    console.log("servidor com express foi carregado");
});