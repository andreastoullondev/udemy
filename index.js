document.addEventListener("DOMContentLoaded", function(){

    let numeroAtual = 0;


    const numeroNoHtml = document.getElementById('numero-atual',);
    const botaoSoma = document.getElementById('botao-que-soma');
    const botaoSub = document.getElementById('botao-que-subtrai');

    function atualizaNumeroNoHTML(){
        numeroNoHtml.textContent = numeroAtual;
        if(numeroAtual === 15 || numeroAtual === -15){
            numeroAtual = 0;
            atualizaNumeroNoHTML();
        }else if( numeroAtual >= 10){
            lampOn();
        }else if( numeroAtual <= -10){
            lampBroken();
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
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOnOff.textContent == 'Desligar';
        lampOff();
        turnOnOff.textContent = 'Ligar';
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

let mensagem;//  mensagem que será exibida no console
let nome;// definir a variavel fora do escopo
function mercado (nome = "toullon", sobrenome = "santos"){
    nome = "Giu";
    sobrenome = "santos";
}
mercado();//chamando a função
switch (nome == nome) {//usando a variavel nome que foi alterada pela função
    case nome:
    mensagem = "ta dando certo";  
        break;

    default:
        mensagem = "Não ta longe do caminho";
        break;
}

console.log(mensagem)



function batePalmas({ tipodePalma }, callback){
    let palmas = ""

    for(let contador = 0;contador < 20; contador++){
   palmas = palmas + tipodePalma + " , "
  
   
}
if(lampOn){
    return palmas;
}else if(lampBroken){

}
    
         
}

function callback(){
    console.log("deu certo");
}

const  resultado = batePalmas({ tipodePalma: "ploft"});
console.log(resultado);

function compraProdutos ({iddoProduto, quantidade}){

    try {
        const estoqueAtual = verificarEstoque(iddoProduto)
        if( estoqueAtual <  quantidade){
        throw new Error ("estoque insuficiente")
    }
    const novoEstoque = estoqueAtual - quantidade
    attEstoque({idProduto:iddoProduto, novaQuantidade: novoEstoque})

     console.log('compra realizada')
    } catch (error) {
        console.log(error)
    }finally{
        console.log("e-mail:suporte@nomedaempresa.com.br ")
    }
}


function verificarEstoque( idProduto) {
    const estoque = 15//Math.floor(Math.random() * 10) + 1
    return estoque
}

function attEstoque( {idProduto, novaQuantidade }){
    console.log('estoque atualizado')
}


compraProdutos({iddoProduto: 2, quantidade: 20})
