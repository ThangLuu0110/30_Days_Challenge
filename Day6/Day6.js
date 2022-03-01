var numberOfKeyCode = document.querySelector('.number');
var keyOfKeyCode = document.querySelector('.key');
var codeOfKeyCode = document.querySelector('.code');



document.onkeydown = function(e) {
    numberOfKeyCode.innerText = e.which;
    keyOfKeyCode.innerText = e.code;
    codeOfKeyCode.innerText = e.which;
}