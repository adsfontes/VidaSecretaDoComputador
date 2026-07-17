/* =====================================================
   VIDA SECRETA DO COMPUTADOR

   JavaScript principal do jogo

   Funcionalidades:
   - Banco de personagens
   - Sistema de XP
   - Progresso
   - LocalStorage
   - Diálogos
   - Quiz
   - Certificado final

===================================================== */





/* =====================================================
   BANCO DE PERSONAGENS
===================================================== */


const personagens = {


    cpu: {

        nome: "CPU",

        imagem: "../img/personagens/cpu.png",


        dialogos: [

            "Olá! Eu sou a CPU.",

            "Sou conhecido como o cérebro do computador.",

            "Eu realizo cálculos e executo comandos.",

            "Sem mim, o computador não conseguiria funcionar!"

        ],


        curiosidade:

            "Consigo realizar bilhões de cálculos por segundo para executar tarefas.",



        pergunta:

            "Quem é responsável pelos cálculos do computador?",



        alternativas: [

            "CPU",

            "Monitor",

            "Teclado"

        ],


        correta: 0

    },





    ram: {


        nome: "RAM",

        imagem: "../img/personagens/ram.png",



        dialogos: [

            "Oi! Eu sou a memória RAM.",

            "Eu guardo informações temporariamente enquanto o computador está ligado.",

            "Eu ajudo o computador a executar vários programas ao mesmo tempo."

        ],



        curiosidade:

            "Quando você abre um aplicativo, muitos dados ficam temporariamente comigo.",



        pergunta:

            "O que acontece com os dados da RAM quando desligamos o computador?",



        alternativas: [

            "Eles são apagados",

            "Eles ficam para sempre",

            "Eles são enviados para a internet"

        ],


        correta: 0

    },








    ssd: {


        nome: "SSD",

        imagem: "../img/personagens/ssd.png",



        dialogos: [

            "Olá! Eu sou o SSD.",

            "Eu sou responsável por guardar arquivos e programas.",

            "Meus dados continuam salvos mesmo quando o computador desliga."

        ],



        curiosidade:

            "SSDs são muito rápidos e ajudam computadores a iniciarem em poucos segundos.",



        pergunta:

            "Qual é a função principal do SSD?",



        alternativas: [

            "Guardar arquivos",

            "Mostrar imagens",

            "Resfriar o computador"

        ],


        correta: 0

    },








    gpu: {


        nome: "GPU",

        imagem: "../img/personagens/gpu.png",



        dialogos: [

            "Ei! Eu sou a GPU.",

            "Eu cuido dos gráficos e imagens do computador.",

            "Jogos, vídeos e animações dependem muito de mim."

        ],



        curiosidade:

            "Placas de vídeo possuem milhares de pequenos núcleos para criar imagens rapidamente.",



        pergunta:

            "Qual componente é responsável pelos gráficos?",



        alternativas: [

            "GPU",

            "Mouse",

            "SSD"

        ],


        correta: 0

    },









    placamae: {


        nome: "Placa-mãe",

        imagem: "../img/personagens/placamae.png",



        dialogos: [

            "Olá! Eu sou a Placa-mãe.",

            "Eu conecto todos os componentes do computador.",

            "Sou como uma estrada onde as informações passam."

        ],



        curiosidade:

            "Sem a placa-mãe, os componentes não conseguiriam trabalhar juntos.",



        pergunta:

            "Qual peça conecta todos os componentes do computador?",



        alternativas: [

            "Placa-mãe",

            "Caixa de som",

            "Monitor"

        ],


        correta: 0

    },

        firewall: {


        nome: "Firewall",

        imagem: "../img/personagens/firewall.png",



        dialogos: [

            "Olá! Eu sou o Firewall.",

            "Minha missão é proteger o computador contra ameaças.",

            "Eu verifico conexões e bloqueio acessos perigosos."

        ],



        curiosidade:

            "O Firewall funciona como uma barreira de segurança entre o computador e a internet.",



        pergunta:

            "Qual é a principal função do Firewall?",



        alternativas: [

            "Proteger o computador",

            "Criar jogos",

            "Aumentar o brilho da tela"

        ],


        correta: 0

    },








    internet: {


        nome: "Internet",

        imagem: "../img/personagens/internet.png",



        dialogos: [

            "Olá! Eu sou a Internet.",

            "Eu conecto computadores do mundo inteiro.",

            "Graças a mim podemos acessar sites e conversar online."

        ],



        curiosidade:

            "A internet conecta bilhões de dispositivos espalhados pelo planeta.",



        pergunta:

            "Qual é a função da Internet?",



        alternativas: [

            "Conectar computadores",

            "Armazenar energia",

            "Resfriar componentes"

        ],


        correta: 0

    },









    arquivos: {


        nome: "Arquivos",

        imagem: "../img/personagens/arquivos.png",



        dialogos: [

            "Oi! Eu sou o Arquivo.",

            "Eu guardo informações como fotos, vídeos e documentos.",

            "Eu ajudo a organizar tudo dentro do computador."

        ],



        curiosidade:

            "Existem vários tipos de arquivos, como imagens, músicas, vídeos e textos.",



        pergunta:

            "Qual é a função dos arquivos?",



        alternativas: [

            "Guardar informações",

            "Acelerar o processador",

            "Proteger contra vírus"

        ],


        correta: 0

    },









    virus: {


        nome: "Vírus Misterioso",

        imagem: "../img/personagens/virus.png",



        dialogos: [

            "HAHAHA! Finalmente você chegou até mim.",

            "Eu sou o Vírus Misterioso.",

            "Você aprendeu sobre todos os componentes.",

            "Agora vamos ver se você realmente conhece o computador!"

        ],



        curiosidade:

            "Vírus de computador são programas maliciosos criados para causar problemas ou roubar informações.",



        perguntasChefe: [

    {
        pergunta:
        "Qual componente é conhecido como o cérebro do computador?",

        alternativas:[
            "CPU",
            "SSD",
            "Monitor"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual memória perde seus dados quando desligamos o computador?",

        alternativas:[
            "RAM",
            "SSD",
            "Placa-mãe"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual componente é responsável pelos gráficos?",

        alternativas:[
            "GPU",
            "Firewall",
            "Arquivo"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual peça conecta todos os componentes?",

        alternativas:[
            "Placa-mãe",
            "Internet",
            "CPU"
        ],

        correta:0
    },


    {
        pergunta:
        "Qual sistema ajuda a proteger o computador contra ameaças?",

        alternativas:[
            "Firewall",
            "SSD",
            "RAM"
        ],

        correta:0
    }

],


        chefe: true

    }


};









/* =====================================================
   CONFIGURAÇÕES DO JOGO
===================================================== */


const configuracaoJogo = {


    xpPorMissao: 100,


    totalMissoes: 8,



    personagensOrdem: [


        "cpu",

        "ram",

        "ssd",

        "gpu",

        "placamae",

        "firewall",

        "internet",

        "arquivos"


    ]


};









/* =====================================================
   DADOS DO JOGADOR
===================================================== */


let dadosJogo = {


    xp: 0,


    concluidos: []


};








/* =====================================================
   LOCAL STORAGE
===================================================== */


function carregarProgresso(){



    const salvo =

        localStorage.getItem(
            "vidaSecretaComputador"
        );



    if(salvo){


        dadosJogo = JSON.parse(salvo);


    }


}






function salvarProgresso(){



    localStorage.setItem(

        "vidaSecretaComputador",

        JSON.stringify(dadosJogo)

    );


}





carregarProgresso();




/* =====================================================
   TELA INICIAL
===================================================== */


const botaoIniciar =

document.getElementById(
    "btnIniciar"
);



const introducao =

document.getElementById(
    "introducao"
);



const botaoContinuar =

document.getElementById(
    "btnContinuar"
);





if(botaoIniciar){


    botaoIniciar.onclick = ()=>{


        document
        .querySelector(".card-inicial")
        .classList.add("oculto");



        if(introducao){

            introducao.classList.remove(
                "oculto"
            );

        }


    };


}







if(botaoContinuar){


    botaoContinuar.onclick = ()=>{


        window.location.href =

        "pages/mapa.html";


    };


}









/* =====================================================
   HUD DO MAPA
===================================================== */


function atualizarMapa(){



    const xp =

    document.getElementById(
        "xpJogador"
    );



    const missoes =

    document.getElementById(
        "missoesConcluidas"
    );



    const barra =

    document.getElementById(
        "barraXP"
    );





    if(xp){


        xp.textContent =

        dadosJogo.xp;


    }





    if(missoes){


        missoes.textContent =

        dadosJogo.concluidos.length

        +

        "/"

        +

        configuracaoJogo.totalMissoes;


    }





    if(barra){


        let porcentagem =


        (

            dadosJogo.concluidos.length /

            configuracaoJogo.totalMissoes

        )

        * 100;




        barra.style.width =

        porcentagem + "%";


    }



    atualizarBloqueios();



}









/* =====================================================
   SISTEMA DE DESBLOQUEIO

   IMPORTANTE:

   Todos os componentes ficam livres.

   Apenas o vírus fica bloqueado.

===================================================== */


function atualizarBloqueios(){



    const cards =

    document.querySelectorAll(
        ".card-personagem"
    );





    cards.forEach(card=>{



        const personagem =

        card.dataset.personagem;




        const status =

        card.querySelector(
            ".status"
        );





        // ==============================
        // CHEFE FINAL
        // ==============================


        if(personagem === "virus"){



            if(

            dadosJogo.concluidos.length

            ===

            configuracaoJogo.totalMissoes

            ){



                card.classList.remove(
                    "bloqueado"
                );



                if(status){


                    status.textContent =

                    "⚔ Enfrentar Vírus";


                }



                card.onclick = ()=>{


                    abrirPersonagem(
                        "virus"
                    );


                };



            }

            else{



                card.classList.add(
                    "bloqueado"
                );



                if(status){


                    status.textContent =

                    "🔒 Bloqueado";


                }



                card.onclick = null;


            }





            return;


        }






        // ==============================
        // COMPONENTES NORMAIS
        // ==============================



        card.classList.remove(
            "bloqueado"
        );



        if(status){



            if(

            dadosJogo.concluidos.includes(
                personagem
            )

            ){



                status.textContent =

                "✔ Missão Concluída";



            }

            else{



                status.textContent =

                "🔓 Disponível";



            }



        }






        card.onclick = ()=>{


            abrirPersonagem(
                personagem
            );


        };



    });



}









/* =====================================================
   ABRIR PERSONAGEM
===================================================== */



function abrirPersonagem(nome){



    window.location.href =


    "personagem.html?personagem="

    +

    nome;



}









/* =====================================================
   SISTEMA DE DIÁLOGOS
===================================================== */


let personagemAtual = null;


let etapaDialogo = 0;







function carregarPersonagem(){



    const parametros =

    new URLSearchParams(

        window.location.search

    );



    const nome =

    parametros.get(
        "personagem"
    );



    if(!nome) return;





    personagemAtual =

    personagens[nome];



    etapaDialogo = 0;





    const imagem =

    document.getElementById(
        "imagemPersonagem"
    );



    const titulo =

    document.getElementById(
        "nomePersonagem"
    );



    if(imagem){


        imagem.src =

        personagemAtual.imagem;


    }





    if(titulo){


        titulo.textContent =

        personagemAtual.nome;


    }



    mostrarDialogo();



}









function mostrarDialogo(){



    const texto =

    document.getElementById(
        "textoDialogo"
    );



    if(texto){


        texto.textContent =

        personagemAtual.dialogos[
            etapaDialogo
        ];


    }



}








const botaoDialogo =

document.getElementById(
    "btnContinuarDialogo"
);




if(botaoDialogo){



    botaoDialogo.onclick = ()=>{



        etapaDialogo++;




        if(

        etapaDialogo

        <

        personagemAtual.dialogos.length

        ){


            mostrarDialogo();



        }

        else{


            mostrarCuriosidade();



        }



    };



}

/* =====================================================
   CURIOSIDADE
===================================================== */


function mostrarCuriosidade(){


    const area =

    document.getElementById(
        "areaCuriosidade"
    );


    const texto =

    document.getElementById(
        "textoCuriosidade"
    );



    if(area && texto){


        texto.textContent =

        personagemAtual.curiosidade;



        area.classList.remove(
            "escondido"
        );


    }



}








const botaoQuiz =

document.getElementById(
    "btnIniciarQuiz"
);




if(botaoQuiz){



    botaoQuiz.onclick = ()=>{


        iniciarQuiz();


    };



}









/* =====================================================
   QUIZ
===================================================== */


function iniciarQuiz(){



    const curiosidade =

    document.getElementById(
        "areaCuriosidade"
    );



    const quiz =

    document.getElementById(
        "areaQuiz"
    );



    if(curiosidade){


        curiosidade.classList.add(
            "escondido"
        );


    }



    if(quiz){


        quiz.classList.remove(
            "escondido"
        );


    }



    mostrarPergunta();



}









function mostrarPergunta(){



    const pergunta =

    document.getElementById(
        "perguntaQuiz"
    );



    const alternativas =

    document.getElementById(
        "alternativasQuiz"
    );




    if(!pergunta || !alternativas)

        return;




    pergunta.textContent =

    personagemAtual.pergunta;




    alternativas.innerHTML = "";





    personagemAtual.alternativas

    .forEach((texto,index)=>{



        const botao =

        document.createElement(
            "button"
        );



        botao.className =

        "alternativa";



        botao.textContent =

        texto;




        botao.onclick = ()=>{


            verificarResposta(
                index
            );


        };



        alternativas.appendChild(
            botao
        );



    });



}









function verificarResposta(resposta){



    if(

    resposta ===

    personagemAtual.correta

    ){



        finalizarMissao();



    }

    else{



        mostrarResultado(false);



    }



}









/* =====================================================
   COMPLETAR MISSÃO
===================================================== */


function finalizarMissao(){



    const id =

    Object.keys(personagens)

    .find(

        chave =>

        personagens[chave]

        ===

        personagemAtual

    );





    // impede XP duplicado

    if(

    !dadosJogo.concluidos.includes(id)

    ){



        dadosJogo.concluidos.push(id);



        dadosJogo.xp +=

        configuracaoJogo.xpPorMissao;



        salvarProgresso();



    }






    mostrarResultado(true);



}









function mostrarResultado(acertou){



    const quiz =

    document.getElementById(
        "areaQuiz"
    );



    const resultado =

    document.getElementById(
        "areaResultado"
    );



    const titulo =

    document.getElementById(
        "tituloResultado"
    );



    const texto =

    document.getElementById(
        "textoResultado"
    );





    if(quiz){

        quiz.classList.add(
            "escondido"
        );

    }




    if(resultado){

        resultado.classList.remove(
            "escondido"
        );

    }





    if(acertou){



        titulo.textContent =

        "🎉 Parabéns!";



        texto.textContent =

        "Resposta correta! Você ganhou +100 XP e completou essa missão.";



    }

    else{



        titulo.textContent =

        "❌ Ops!";



        texto.textContent =

        "Resposta errada. Tente novamente e continue aprendendo!";



    }



}









/* =====================================================
   NAVEGAÇÃO
===================================================== */


function voltarMapa(){


    window.location.href =

    "mapa.html";


}






const botaoMapa =

document.getElementById(
    "btnVoltarMapa"
);



if(botaoMapa){


    botaoMapa.onclick = ()=>{


        voltarMapa();


    };


}









/* =====================================================
   CERTIFICADO
===================================================== */


function carregarCertificado(){



    const xpFinal =

    document.getElementById(
        "xpFinal"
    );



    if(xpFinal){


        xpFinal.textContent =

        dadosJogo.xp;


    }



}








const botaoReiniciar =

document.getElementById(
    "btnJogarNovamente"
);




if(botaoReiniciar){



    botaoReiniciar.onclick = ()=>{



        localStorage.removeItem(

            "vidaSecretaComputador"

        );



        window.location.href =

        "../index.html";



    };



}









/* =====================================================
   FINAL DO VÍRUS
===================================================== */


function verificarFinal(){



    const pagina =

    window.location.pathname;



    if(

    pagina.includes(
        "personagem.html"
    )

    &&

    personagemAtual

    &&

    personagemAtual.chefe

    ){



        if(

        dadosJogo.concluidos.length

        ===

        configuracaoJogo.totalMissoes

        ){



            // aqui futuramente pode entrar
            // batalha final com 5 perguntas



        }



    }



}





/* =====================================================
   BATALHA FINAL CONTRA O VÍRUS
===================================================== */


let perguntaChefeAtual = 0;

let acertosChefe = 0;




function iniciarBatalhaVirus(){


    perguntaChefeAtual = 0;

    acertosChefe = 0;


    mostrarPerguntaVirus();


}





function mostrarPerguntaVirus(){


    const chefe = personagens.virus;


    const perguntaAtual =

    chefe.perguntasChefe[
        perguntaChefeAtual
    ];



    document.getElementById(
        "perguntaQuiz"
    ).textContent =

    perguntaAtual.pergunta;



    const area =

    document.getElementById(
        "alternativasQuiz"
    );



    area.innerHTML = "";




    perguntaAtual.alternativas

    .forEach((alternativa,index)=>{


        const botao =

        document.createElement(
            "button"
        );



        botao.className =
        "alternativa";



        botao.textContent =
        alternativa;




        botao.onclick = ()=>{


            responderVirus(index);


        };



        area.appendChild(botao);



    });



}






function responderVirus(resposta){



    const perguntaAtual =

    personagens.virus.perguntasChefe[
        perguntaChefeAtual
    ];



    if(

    resposta === perguntaAtual.correta

    ){


        acertosChefe++;


    }





    perguntaChefeAtual++;





    if(

    perguntaChefeAtual <

    personagens.virus.perguntasChefe.length

    ){


        mostrarPerguntaVirus();



    }

    else{


        finalizarBatalhaVirus();


    }



}






function finalizarBatalhaVirus(){



    if(

    acertosChefe === 5

    ){


        window.location.href =

        "certificado.html";



    }

    else{


        alert(

        "O vírus escapou! Revise os componentes e tente novamente."

        );


        voltarMapa();


    }



}



/* =====================================================
   INICIALIZAÇÃO
===================================================== */


document.addEventListener(

"DOMContentLoaded",

()=>{


    atualizarMapa();


    carregarPersonagem();


    carregarCertificado();


    verificarFinal();



});