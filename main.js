var inputX1 = document.querySelector('.inputX1');
var inputY1 = document.querySelector('.inputY1');
var inputX2 = document.querySelector('.inputX2');
var inputY2 = document.querySelector('.inputY2');

var resultX = document.querySelector('.resultX');
var resultY = document.querySelector('.resultY');

var btn = document.querySelector('.btn');

var radio = document.getElementsByName('customRadio');
for (var i = 0; i < radio.length; i++) {
    radio[i].onchange = testRadio;
}
function testRadio() {
    console.log(.value);
}
document.getElementsByClassName('btn').onclick = checkRadio;
function checkRadio() {
    var m = document.getElementsByName('customRadio');
    for (var i = 0; i < m.length; i++) {
        if (m[i].checked) {
            resultX.textContent = m[i].value + ': x = ' + inputX1.value + '; ' + 'y = ' + inputY1.value;
            break;
        }
    }
}
// btn.addEventListener('click', function (event) {
//     resultY.textContent = 'x = ' + inputX2.value + '; ' + 'y = ' + inputY2.value;
// });