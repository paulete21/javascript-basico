/*alert('ola mundo');
Programa javascript que demonstra estrutura de repetição
*/

/*const painel= document.getElementById('painel');
let texto=' ';

let flag= true;
let contador= 0;

while(flag){
    if(contador<10){
        console.log("trabalhando...")
        //operador de incremento
        contador++;
        texto= " trabalhando " // qndo da o espaço ficseparada o nome e não mais junto
        let resultado= document.createTextNode(texto);
        painel.appendChild(resultado);
    
    }else{
        flag= false;
    }
}
*/

for(let x=0; x<20; x+=2){  //se não tiver o sinal de <= ele só vai impromir até 18
    let resultado= document.createTextNode(x+" ");

    painel.appendChild(resultado);
}

