document.addEventListener("DOMContentLoaded", function(){

     let numeroAtual = 0;


     const numeroNoHtml = document.getElementById('numero-atual')
     const botaoSoma = document.getElementById('botao-que-soma')
     const botaoSub = document.getElementById('botao-que-subtrai')
    
    function atualizaNumeroNoHTML(){
        numeroNoHtml.textContent = numeroAtual
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
// concat quando ele é usado ele retorno uma array com tudo dentro sem modificar as originais;

const array1 = [5, 2, 3];
const array2 = [8, 1, 4];
const array3 = [6, 7, 9];

//const resultado = array1.concat(array2, array3);
//array1.unshift(array2, array3) um dado no começo da array nesse casso adicionou a string array2 e 3
//array1.shift(3) reomove o primeiro dado da array ,não consegui remover outro 
// metodo with me permiti acessar um escopo de um objeto pelo meu objeto atual(gostei e estou pensando como vou usar)

console.log(array1);

