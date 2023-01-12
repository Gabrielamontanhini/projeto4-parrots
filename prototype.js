

const main = document.querySelector('.main')


function criarCarta() {
    alert("no max you're mean"); 
    const carta = main.createElement('div');
    const front = carta.createElement('div');
    const back = carta.createElement('div');

    carta.className = 'card';
    front.className = 'face frontal';
    back.className = 'face traseira';

    //card.appendChild(front);
    //card.appendChild(back);

    //main.appendChild(carta)
}