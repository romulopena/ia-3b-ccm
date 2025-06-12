const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const perguntas = [
    {
        enunciado: "De que forma a evolução da tecnologia na escola pode preparar os alunos para os desafios da sociedade contemporânea, e como isso impacta a inclusão e a equidade no acesso ao conhecimento?",
        alternativas: [
            {
                texto: "A tecnologia na escola equipa alunos com habilidades para a sociedade atual.",
                afirmacao: "Isso exige inclusão digital para evitar disparidades e garantir equidade no acesso ao conhecimento."
                
            },
            {
                texto: "Integrar a tecnologia na escola reflete a dinâmica da sociedade conectada.",
                afirmacao: "É vital preparar jovens para o uso ético da tecnologia, combatendo a desinformação e fortalecendo a participação cívica."
            },
        ]
    },
    {
        enunciado: "Como a tecnologia pode ser uma ferramenta para que a escola aborde questões sociais relevantes, promovendo a conscientização e o engajamento dos alunos em temas como cidadania digital e diversidade na sociedade?",
        alternativas: [
            {
                texto: "A tecnologia oferece plataformas para a escola explorar cidadania digital.",
                afirmacao: "Isso promove o respeito à diversidade na sociedade por meio de projetos colaborativos."
            },
            {
                texto: "O uso estratégico da tecnologia na escola engaja alunos em questões sociais.",
                afirmacao: "Ferramentas digitais permitem que expressem opiniões, tornando-os agentes de transformação na sociedade."
            },
        ]
    },
    {
        enunciado: "Quais os principais desafios e oportunidades da tecnologia para a escola, no que diz respeito à sua função de formar cidadãos críticos e atuantes na sociedade, considerando o rápido avanço e a constante necessidade de adaptação?",
        alternativas: [
            {
                texto: "O desafio é usar a tecnologia para estimular o pensamento crítico, não só reproduzir conteúdo.",
                afirmacao: "A oportunidade é personalizar o ensino e facilitar o acesso à informação, formando cidadãos atuantes na sociedade."
            },
            {
                texto: "O desafio da tecnologia na escola é manter-se atualizada com as inovações.",
                afirmacao: "A oportunidade é promover colaboração global, capacitando alunos como cidadãos globais na sociedade interconectada."
            },
        ]
    },
    {
        enunciado: "Como a rápida evolução tecnológica desafia a escola a se adaptar para preparar os alunos para as futuras demandas da sociedade, e qual o papel da comunidade nesse processo?",
        alternativas: [
            {
                texto: "A evolução tecnológica exige que a escola inove o currículo para as futuras demandas da sociedade.",
                afirmacao: "A comunidade, incluindo pais e empresas, é essencial para apoiar essa adaptação e oferecer recursos."
            },
            {
                texto: "O desafio da tecnologia é garantir que a escola ensine habilidades relevantes para o futuro do trabalho na sociedade.",
                afirmacao: "A comunidade pode conectar a escola com o mercado, trazendo experiências práticas e oportunidades."
            },
        ]
    },
    {
        enunciado: "De que maneira a tecnologia pode ser usada pela escola para fortalecer os laços entre a comunidade escolar e a sociedade, promovendo um senso de responsabilidade compartilhada no desenvolvimento educacional e social?",
        alternativas: [
            {
                texto: "A tecnologia permite à escola comunicar-se melhor com a sociedade e a comunidade.",
                afirmacao: "Isso cria um senso de responsabilidade compartilhada no apoio ao desenvolvimento educacional."
            },
            {
                texto: "Usar a tecnologia na escola facilita projetos que engajam a comunidade em causas sociais relevantes",
                afirmacao: " Isso fortalece laços, promovendo colaboração para melhorias educacionais e sociais na sociedade."
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