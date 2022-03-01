var buttonBox = document.querySelector('.button-box');
var inputBox = document.querySelector('.input-box');
var insertTextBox = document.querySelector('.input-box input');
var count = 0;
buttonBox.onclick = function() {
    if (count % 2 === 0) {
        inputBox.style.width = '400px';
        Object.assign(buttonBox.style, {
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0',
        })
    }
    else{
        inputBox.style.width = '70px';
        Object.assign(buttonBox.style, {
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
        })
    }
    count += 1;
};
document.onkeydown = function(e) {
    if(e.keyCode === 13){
        insertTextBox.value = '';
    }
}

console.log(buttonBox.style)