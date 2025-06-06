const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "Como resolver equação do segundo grau?",
        alternativas: [
            {
                texto: "aplicar a formula de Bhaskara",
                afirmacao: "Aplicando a formula de Bhaskara voce pode resolver de forma mais demorada"
                
            },
            {
                texto: "Soma e produto",
                afirmacao: "usando soma e produto voce pode economizar tempo"
            },
        ]
    },
    {
        enunciado: "Pergunta2",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "afirmacao1"
            },
            {
                texto: "alternativa2",
                afirmacao: "afirmacao2"
            },
        ]
    },
    {
        enunciado: "Pergunta3",
        alternativas: [
            {
                texto: "alternativa1",
                afirmacao: "afirmacao1"
            },
            {
                texto: "alternativa2",
                afirmacao: "afirmacao2"
            },
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    textoResultado.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", ()=>respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacao = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacao + " ";
     atual++;
     mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Conclusão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();