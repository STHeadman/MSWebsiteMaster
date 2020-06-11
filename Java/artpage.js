console.log('Artpage Javascript is working.');

const nsfw = document.getElementsByClassName('imgHolder2');
const nsfw2 = [];
let NSFWB = document.getElementById('button1');
let SFWB = document.getElementById('button2');


console.log(nsfw);

let blue = () =>{
    for(let i=0; i < nsfw.length; i++){
        nsfw[i].style.display = 'none';
    }
};

let red = () =>{
    for(let i=0; i < nsfw.length; i++){
        nsfw[i].style.display = '';
    }
};

SFWB.onclick = blue;
NSFWB.onclick = red;

document.addEventListener('DOMContentLoaded',blue);

