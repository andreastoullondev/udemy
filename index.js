document.addEventListener("DOMContentLoaded", function(){

    let numeroAtual = 0;


    const numeroNoHtml = document.getElementById('numero-atual',()=>{

    });
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

const turnOnOff = document.getElementById('turnOnOff');
const lamp = document.getElementById('lamp');

function islampBroken (){
    return lamp.src.indexOf('quebrada') > -1;
}

function lampOn(){
    if(!islampBroken()){
        lamp.src = '/img/ligada.jpg';
    }
    
}
function lampOff(){
    if(!islampBroken ()){
        lamp.src = '/img/desligada.jpg';
    }
}
function lampBroken (){
    lamp.src = '/img/quebrada.jpg';
}
function lampOnOff(){
    if(turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar'
    }
}

turnOnOff.addEventListener( 'click', lampOnOff);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener( 'mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);


function abriModal(){
    const modal = document.getElementById('janela-modal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) =>{
        if(e.target.id == 'fechar' || e.target.id == 'janela-modal'){
            modal.classList.remove('abrir')
        }
    })
}





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

let mensagem; // mensagem que será exibida no console
let nome;// definir a variavel fora do escopo
function mercado (nome = "toullon", sobrenome){
    nome = "Toullon";//alterando nome dentro da função
    sobrenome = "Andreas";
}
mercado();//chamando a função
switch (nome) {//usando a variavel nome que foi alterada pela função
    case nome:
    mensagem = "ta dando certo";  
        break;

    default:
        mensagem = "Não ta longe do caminho";
        break;
}

console.log(mensagem) // exibe no console
