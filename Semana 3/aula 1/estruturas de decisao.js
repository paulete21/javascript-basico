/*alert("olá mundo")

Programa javascript que demonstra estruturas de decisão
*/
// criando variavéis var, let, const

let letra='Javascript';

let numero1= 10, numero2= 25;
// + soma - subtração * multiplicação / divisão
/*
letra= numero1+numero2
console.log(letra);
console.log(numero1-numero2);
console.log(numero1*numero2);
console.log(numero1/numero2);


console.log(numero1>numero2);
console.log(numero1<=numero2);
console.log(numero1==numero2);
console.log(numero1!=numero2);


console.log(numero1==letra);
console.log(numero1===letra);


letra= "10"; //com estring ou seja aspas, eles são iguais

if(numero1===letra)
    console.log('eles são do memso tipo');
else if(numero1==letra)
    console.log('eles são iguais')
else    
    console.log('os dois não sãp do mesmo tipo');

   
    letra= 10;  // sem estring ou seja aspas, eles são do memso tipo

if(numero1===letra)
    console.log('eles são do memso tipo');
else if(numero1==letra)
    console.log('eles são iguais')
else    
    console.log('os dois não sãp do mesmo tipo');



letra= "16"; 

if(numero1===letra)
    console.log('eles são do memso tipo');
else if(numero1==letra)
    console.log('eles são iguais')
else    
    console.log('os dois não sã do mesmo tipo e nem iguais');
*/

let opcao= 1
switch(opcao){
    case 1: console.log("ensino médio"); break; //break serve para parar os casos
    case 2: console.log("graduação"); break;
    case 3: console.log("mestrado"); break;
    case 4: console.log("doutorado"); break;
    default: console.log("escolaridade não definida"); 
}