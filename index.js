document.addEventListener("DOMContentLoaded", function(){

    let numeroAtual = 0;


    const numeroNoHtml = document.getElementById('numero-atual')
    const botaoSoma = document.getElementById('botao-que-soma')
    const botaoSub = document.getElementById('botao-que-subtrai')
     
    function atualizaNumeroNoHTML(){
        numeroNoHtml.textContent = numeroAtual;

        if(numeroAtual === 11 || numeroAtual === -11){
            numeroAtual = 0;
            atualizaNumeroNoHTML();
        }
    }

    botaoSoma.addEventListener('click', function(){
        numeroAtual++;
        atualizaNumeroNoHTML();
    })

    botaoSub.addEventListener('click', function(){
        numeroAtual--; 
        atualizaNumeroNoHTML();
    })

    atualizaNumeroNoHTML()
});

const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function lampOn(){
    lamp.src = '/img/ligada.jpg';
}
function lampOff(){
    lamp.src = '/img/desligada.jpg';
}





turnOn.addEventListener( 'click', lampOn);
turnOff.addEventListener( 'click', lampOff);
lamp.addEventListener('mouseover',lampOn);







//Fibonacci
let penultimo = 0;

let ultimo = 1 ;

let proporcao = 0;

const ciclosDesejados = 20;

for(let contador = 0;contador <=ciclosDesejados;contador++){
    let proximo = penultimo + ultimo
    penultimo = ultimo
    ultimo = proximo

    console.log(proximo)

    if(contador > 0){
        proporcao = ultimo / penultimo
    }

}
console.log(proporcao);



