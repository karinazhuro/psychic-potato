var inputX1 = document.querySelector('.inputX1');
var inputY1 = document.querySelector('.inputY1');
var inputX2 = document.querySelector('.inputX2');
var inputY2 = document.querySelector('.inputY2');

var resultX = document.querySelector('.resultX');
var resultY = document.querySelector('.resultY');

var btn = document.querySelector('.btn');

var rook = document.getElementById('customRadio3');
var eleph = document.getElementById('customRadio4');
document.getElementById('btn').onclick = getCheckedRadioButtonFigure1;

//вывод фигуры и координат
// function checkRadio() {
//     var figure1 = document.getElementsByName('customRadio');
//     for (var i = 0; i < figure1.length; i++) {
//         if (figure1[i].checked) {
//             resultX.textContent = figure1[i].value + ': x = ' + inputX1.value + '; ' + 'y = ' + inputY1.value;
//             break;
//         }
//     }
//     var figure2 = document.getElementsByName('customRadio1');
//     for (var i = 0; i < figure2.length; i++) {
//         if (figure2[i].checked) {
//             resultY.textContent = figure2[i].value + ': x = ' + inputX2.value + '; ' + 'y = ' + inputY2.value;
//             break;
//         }
//     }
// }

function getCheckedRadioButtonFigure1() { //радиогруппу вложить в параметр
    var figure1 = document.getElementsByName('customRadio');
    for (var i = 0; i < figure1.length; i++) {
        figure1[i].checked;
    }
}
function getCheckedRadioButtonFigure2() {
    var figure2 = document.getElementsByName('customRadio1');
    for (var i = 0; i < figure2.length; i++) {
        figure2[i].checked;
    }
}
// function handlStatus() {
//     switch  {
//         case (figure1[i].checked == rook.checked):
//             isUnderRookHit();
//             break;
//         case (figure1[i].checked == eleph.checked):
//             isUnderElephHit();
//             break;
//     }
// }
function isUnderRookHit() {
    if (inputX1.value == inputX2.value || inputY1.value == inputY2.value) {
        resultX.textContent = rook.value + ': x = ' + inputX1.value + '; ' + 'y = ' + inputY1.value;
    }
}
function isUnderElephHit() {
    if ((Math.abs(inputX1.value - inputX2.value)) == (Math.abs(inputY1.value - inputY2.value))) {
        resultX.textContent = rook.value + ': x = ' + inputX1.value + '; ' + 'y = ' + inputY1.value;
    }
}