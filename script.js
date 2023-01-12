const lista = document.querySelector('ul')
let mensagem = prompt("Com quantas cartas quer jogar?");
let numero = Number(mensagem);
if (numero%2 !== 0){
    prompt("Com quantas cartas quer jogar?")
}

const imagensVersonaOrdem = [
    'applecat.gif',
    'bigfloppa.gif',
    'cat.gif',
    'maxwell-cat.gif',
    'cat-wow.gif',
    'memes-meme.gif',
    'cat-sniff.gif'
]

let imagensVerso = imagensVersonaOrdem.sort(() => Math.random() - 0.5);


let a = (numero / 2);
alert(a)

let primeiraFila = []
for (b = 0; b < a; b ++) {
    primeiraFila.push(imagensVerso[b]);
}
// console.log(primeiraFila);


let segundaFila = primeiraFila.sort(() => Math.random() - 0.5);

// console.log(segundaFila);

let arrayTotal = primeiraFila.concat(segundaFila);
// console.log(arrayTotal);

let arrayParauso = arrayTotal.sort(() => Math.random() - 0.5);
console.log(arrayParauso);


// ESSA AQUI DÁ CERTO \/


let criarLi = () => {
        const Li = document.createElement('li')
        const frente = document.createElement('div');
        const verso = document.createElement('div');

        frente.className = 'face front';
        verso.className = 'face back hidden';
        const papagaio = document.createElement('img');

        const gif = document.createElement('img');

Li.setAttribute('data-test', 'card');


        papagaio.setAttribute("src", "./imagens/back.png");
        papagaio.setAttribute('data-test','face-down-image');

        gif.setAttribute("src", `./imagens/${
            arrayParauso[i]
        }`)
        gif.setAttribute('data-test','face-up-image');

        lista.appendChild(Li);
        Li.appendChild(frente);
        Li.appendChild(verso);
        frente.appendChild(papagaio);
        verso.appendChild(gif);
        Li.setAttribute('onclick', 'mostrarFace(this)'); // GERA O NUMERO PEDIDO COM AS IMAGENS

    }
    for (i = 0; i < mensagem; i ++) {
        criarLi();
    }
    // ESSA AQUI DÁ CERTO /\


    // ESSA AQUI DÁ CERTO \/
    let primeiraCarta,
        segundaCarta;


    function mostrarFace(essa) {
        if (primeiraCarta == undefined) {
            essa.classList.add('revelar')
            essa.querySelector('.back').classList.remove('hidden');
            primeiraCarta = essa;
            return false;
        } else if (segundaCarta == undefined) {
            essa.classList.add('revelar')
            essa.querySelector('.back').classList.remove('hidden');
            segundaCarta = essa;
        }
        checarPares()

    }


    function desvira() {
        setTimeout(() => {
            primeiraCarta.classList.remove('revelar');
            primeiraCarta.querySelector('.back').classList.add('hidden');
            segundaCarta.classList.remove('revelar');
            segundaCarta.querySelector('.back').classList.add('hidden');

            primeiraCarta= undefined;
            segundaCarta=undefined;
        }, 1000);

    }

    function checarPares() {
        let pareou = primeiraCarta.innerHTML === segundaCarta.innerHTML
        console.log(pareou)
        if (pareou == false) {
            desvira()
        } else if( pareou == true){
            primeiraCarta.removeAttribute("onclick");
            segundaCarta.removeAttribute("onclick");
            primeiraCarta= undefined;
            segundaCarta=undefined;
        }
    }
