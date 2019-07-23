var inputX1 = document.querySelector('.inputX1');
var inputY1 = document.querySelector('.inputY1');
var inputX2 = document.querySelector('.inputX2');
var inputY2 = document.querySelector('.inputY2');

// var rook1 = document.querySelector('.rook1');
// var elep1 = document.querySelector('.elep1');
// var rook2 = document.querySelector('.rook2');
// var rook2 = document.querySelector('.rook2');

var resultX = document.querySelector('.resultX');
var resultY = document.querySelector('.resultY');

var coordX = Number(inputX1.value);
var coordY = Number(inputY1.value);

var btn = document.querySelector('.btn');

btn.addEventListener('click', function (event) {
    resultX.textContent = 'x = ' + inputX1.value + ', ' + 'y = ' + inputY1.value;
});
