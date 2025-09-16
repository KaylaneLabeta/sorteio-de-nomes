let titulo = document.querySelector('h1');
titulo.innerHTML=('Amigo Secreto');

let segundoTitulo = document.getElementById('titulo2');
segundoTitulo.innerHTML=('Qual amigo(a) o destino escolheu para você?');

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = ('Para o sorteio, reúna os nomes dos seus amigos abaixo:');
// Mensagens iniciais na tela // Boas práticas: prcecisa simplificar mais o codigo!

// lista de amigos
let listaDeNomes = [];

// lista de nomes ja sorteados
let nomesJaSorteados = [];


// função para adicionar os nomes digitados à lista de amigos
function adicionarNomes() {
    let nomeInput = document.getElementById('nomeInput');
    let nomeDigitado = nomeInput.value.trim();
    if(nomeDigitado !== '') {
        listaDeNomes.push(nomeDigitado);
        limparCampo();
        listaNatela();
        
        
    }    else {
        alert('erro: Por favor inserir um nome válido.');
    }
}
 

// função para limpar campo input onde digita os nomes
function limparCampo(){
    document.getElementById('nomeInput').value = '';
}

// função para mostrar na tela a lista com os nomes digitados
function listaNatela(){
let listaNatela = document.getElementById('listaAmigos');
let conteudoHTML = listaDeNomes.map(nome => `<li>${nome}</li>`).join('');
listaNatela.innerHTML = (`<ul>${conteudoHTML}</ul>`);
}


// função que faz o sorteio dos nomes
function sortearAmigo() {
    
    let verificarListaNaTela = document.getElementById('listaAmigos');

    // verificar se o array amigos não está vazio para fazer o sorteio 
    if (listaDeNomes.length === 0 && verificarListaNaTela.children.length === 0) {
        alert('Por favor, insira um nome.');
        return;
    }
    if (listaDeNomes.length === 0){
         verificarListaNaTela.innerHTML = '';
        alert('Todos os amigos ja foram sorteados.');
        return;
    }
     
    // Gerar um indice aleatiro para ser atribuido a um índice aleatório do array.
    let indiceAleatorio = Math.floor(Math.random() * listaDeNomes.length);
    let nomesAleatorios = listaDeNomes[indiceAleatorio];
    
    // tirar da lista de nomes e colocar na lista de ja sorteado
    listaDeNomes.splice(indiceAleatorio,1);
    
    
    nomesJaSorteados.push(nomesAleatorios);
    

    
   

    // Exibe o nome sorteado na tela
    let resultadoSorteio = document.getElementById('resultadoDoSorteio');
    resultadoSorteio.innerHTML = (`O Amigo(a) sorteado foi: ${nomesAleatorios}!!`);
    
    
    

}


function reiniciarJogo(){
    listaDeNomes = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultadoDoSorteio').innerHTML = '';
    
}
