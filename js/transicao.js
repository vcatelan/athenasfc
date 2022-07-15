var localstorage = { fundo: "" };
function atualizar(){
   var e_header = document.querySelector("header");
   e_header.style.backgroundImage = "url(http://dvdteste.hospedagemdesites.ws/imagem"+randFundo()+".jpg)";
}

function randFundo(){
   var fundo = [1,2,3][Math.floor(Math.random()*3)];
   !localstorage.fundo ? localstorage.fundo = fundo : 0;
   return localstorage.fundo == fundo
   ?
   (localstorage.fundo = fundo+1)
   :
   (localstorage.fundo = fundo);
}

window.onload = atualizar;
