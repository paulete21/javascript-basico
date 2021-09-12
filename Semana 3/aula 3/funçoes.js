/*
Programa javascript que demonstra funções
*/

/*const painel= document.getElementById('painel');

let texto=''

let numero1= 30, numero2= 10;

//função com parâmetros e com retorno
function soma(variavel1,variavel2){
    return variavel1 + variavel2;

}

texto= soma(numero1,numero2);

const resultado= document.createTextNode(texto);
painel.appendChild(resultado);
*/

//função sem parâmetro e com retorno
/*
function endereco(){
    return "Av. beira mar, 2121";
}

    
texto= endereco();

const resultado= document.createTextNode(texto);
painel.appendChild(resultado); 
*/


//função sem parâmtero e sem retorno

function endereco(){
    return "Av. beira mar, 2121";
}
function olamundo(){
    console.log("olá mundo");    
}

olamundo(); //isso é a chamada pra imprimir no console, sem isso não aparece nada em lugar algum

texto= endereco();

const resultado= document.createTextNode(texto);
painel.appendChild(resultado);    
   