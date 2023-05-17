const items = document.querySelectorAll('img');
const nbSlide = items.length;
let count = 0;
//defile les images du carousselle automatiquement
function slideAuto(){
    items[count].classList.remove('active');

    if(count < nbSlide - 1){
        count++;
    } else {
        count = 0;
    }
    if(count === 10){
        count = 1;
    }

    items[count].classList.add('active')
    console.log(count); 
}
const COULDOWN_DURARION = 8000; // 8 secondes
//répete la fonction slide auto toute les 8 secondes
setInterval(function() {
    slideAuto();
}, COULDOWN_DURARION)