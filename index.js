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