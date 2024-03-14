let bady = document.querySelector('body');

let arr = [];

// const data = async () => {

//     let number = Math.floor(Math.random()*999);

//     document.body.style.backgroundImage = `url(https://picsum.photos/${number})`;
// }
// data();
// setInterval(data(),36000)



fetch('https://picsum.photos/v2/list')
    .then(function (respone) {
        return respone.json()
    })
    .then(function () {
        let number = Math.floor(Math.random() * 30);
        document.body.style.backgroundImage = `url(https://picsum.photos/id/${number}/5000/3333)`
    })


let text = document.querySelector('.text')
let text1 = document.querySelector('.text1')

fetch('https://official-joke-api.appspot.com/random_joke')
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        text.textContent = data.setup
        text1.textContent = data.punchline
    })


function umar() {
    let box = document.querySelector('.box')
    let data = new Date();

    let hours = document.querySelector('.hours')
    hours.innerHTML = data.getHours();
    let minuts = document.querySelector('.minuts')
    minuts.innerHTML = data.getMinutes();

    // hours.textContent = '0' + hours < 10 ;
    // minuts.textContent = minuts < 10 ;
}

umar()


setInterval(function () {
    umar()
}, 100000,)



let inputTag = document.querySelector('.yozish')
let javob = document.querySelector('.javob')


let parentDiv = document.querySelector('.parent')

function logText() {

    let newDiv = document.createElement('div');
    newDiv.classList.add('input-text');

    let newP = document.createElement('p')
    newP.textContent = inputTag.value

    let plusBtn = document.querySelector('.javob');
    plusBtn.textContent = 'plus';
    plusBtn.addEventListener('click', function () {
        newP.classList.toggle('over')
    })


    newDiv.appendChild(newP);
    newDiv.appendChild(plusBtn);
    parentDiv.appendChild(newDiv)

    inputTag.value = ''
    inputTag.classList.add('olibtasha')
    btn.classList.add('olibtasha')
    javob.classList.add('olibqoyish')
    newP.classList.add('yozuv')

}


let btn = document.querySelector('.ok');

btn.classList.add('nol')

btn.addEventListener('click', logText)

let ismcha = document.querySelector('.ism')

let ismpromt = prompt('Ismingizni kiriting')

ismcha.textContent = 'Hello,' + ismpromt

ismcha.appendChild(ismpromt)

