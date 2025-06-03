let valores = document.querySelectorAll('#valores button');
let numero = document.getElementById('numero');
let numero2 = document.getElementById('numero2');
let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');


valorselecionado = null;


valores.forEach(valor =>{
    valor.addEventListener('click', () =>{
        valorselecionado = valor.textContent;

        valor.classList.toggle('clicado');
    })
});

 

calcular.addEventListener('click', () =>{
    let n1 = parseFloat(numero.value);
    let n2 = parseFloat(numero2.value);


    if(isNaN(n1) || isNaN(n2)){
        resultado.textContent = '⚠️Preencha com algum número!'
        return;
    }


    if(!valorselecionado){
        resultado.textContent = '⚠️Escolha alguma operação!'
        return;
    }



let res;

    switch (valorselecionado){
        case '+':
            res = n1 + n2
            break;
        case '-':
            res = n1 - n2
            break;
        case '*':
            res = n1 * n2
            break;
        case '/':
            res = n2 !== 0 ? n1 / n2 : '⚠️Divisão com 0!!'
            break;            
    }       

        resultado.textContent = 'Resultado: ' + res;
})



addEventListener('keydown', function(evento){
    if(evento.key === 'Enter'){
        calcular.click();
    }
})
