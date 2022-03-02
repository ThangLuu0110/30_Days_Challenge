const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const background = $('.background');
const process = $('.process');
const processNumber =$('.process__number');

background.addEventListener('mousemove',(e)=>{
    console.log(background.offsetLeft, e.pageX);
    var percent = Math.round((e.pageX - background.offsetWidth) / background.offsetLeft * 100);
    processNumber.innerText = `${percent}%`;
    process.style.width = `${percent}%`;
})