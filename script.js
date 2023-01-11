function virarCarta(essa){
    let carta = essa;
    let cartaVirada = essa.classList.toggle('virada');
let frente = carta.querySelector('.front');
let tras = carta.querySelector('.back');
frente.classList.toggle('hidden');
tras.classList.toggle('hidden');
}