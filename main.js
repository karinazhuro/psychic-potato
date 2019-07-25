var inputX1 = document.querySelector('.inputX1');
var inputY1 = document.querySelector('.inputY1');
var inputX2 = document.querySelector('.inputX2');
var inputY2 = document.querySelector('.inputY2');

var resultX = document.querySelector('.resultX');
var resultY = document.querySelector('.resultY');

var btn = document.querySelector('.btn');

var inputRook = document.getElementById('customRadio3');

document.getElementById('btn').onclick = checkRadio;

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

// функция ладьи
function checkRadio() {
    var figure1 = document.getElementsByName('customRadio');
    for (var i = 0; i < figure1.length; i++) {
        if (figure1[i].checked === inputRook.checked) {
                resultX.textContent = inputRook.value + ' с координатами: ' + 'x = ' + inputX1.value + '; ' + 'y = ' + inputY1.value;
            }
        }
    }