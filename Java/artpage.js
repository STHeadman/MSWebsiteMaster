console.log('Artpage Javascript is working.');

const nsfw = document.getElementsByClassName('imgHolder2');
const nsfw2 = [];
let NSFWB = document.getElementById('button1');
let SFWB = document.getElementById('button2');


console.log(nsfw);

let cover = () =>{
    for(let i=0; i < nsfw.length; i++){
        nsfw[i].style.display = 'none';
    }
};

let uncover = () =>{
    for(let i=0; i < nsfw.length; i++){
        nsfw[i].style.display = '';
    }
};

let AgeVerification = () => {
    let age = prompt('What is your age?');
    let x = parseFloat(age);

    if ( x >= 18 ){
        uncover();
    } else {
        cover();
    }
}

document.addEventListener('DOMContentLoaded',cover);

SFWB.onclick = cover;
NSFWB.onclick = uncover;
NSFWB.addEventListener('click',AgeVerification);




