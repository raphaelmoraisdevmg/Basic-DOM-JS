function corFundo(){
    var fundo=document.getElementsByTagName("body")[0].className="cor-fundo";
    
}
function corFundo1(){
    var fundo1=document.getElementsByTagName("body")[0].className="cor-fundo2";
    
}
function corFundo2(){
    var fundo2=document.getElementsByTagName("body")[0].className="cor-fundo3";
    
}
function corTitulo(){
    var element=document.getElementsByTagName("h1")[0].className="cor-titulo";
}

function trocaTitulo(){
var titulo=prompt("Escolha qual valor você quer no título");
var element=document.getElementsByTagName("h1")[0].textContent=titulo;

}
