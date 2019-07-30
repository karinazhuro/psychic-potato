const inputX1 = document.querySelector('.inputX1');
const inputY1 = document.querySelector('.inputY1');
const inputX2 = document.querySelector('.inputX2');
const inputY2 = document.querySelector('.inputY2');

const resultX = document.querySelector('.resultX');
const resultY = document.querySelector('.resultY');

const btn = document.querySelector('.btn');

const rook = document.getElementById('customRadio3');   //получение фигур по id
const eleph = document.getElementById('customRadio4');

document.getElementById('btn').onclick = handlStatus;

const chessmanRadioGroup1 = document.getElementsByName('customRadio');      //радиогруппа
const chessmanRadioGroup2 = document.getElementsByName('customRadio1');     //радиогруппа

function handlStatus() {
    const chessmanX1 = inputX1.value;   //получение координат
    const chessmanY1 = inputY1.value;
    const chessmanChecked1 = getCheckedRadioButton(chessmanRadioGroup1);

    const chessmanX2 = inputX2.value;
    const chessmanY2 = inputY2.value;
    const chessmanChecked2 = getCheckedRadioButton(chessmanRadioGroup2);

    switch (chessmanRadioGroup1.value) {
        case rook.value:
            isUnderRookHit(4, 4, 2, 4);
            break;
        case eleph.value:
            isUnderElephHit();
            break;
    }
}

function getCheckedRadioButton(radioGroup) {
    for (let i = 0; i < figure1.length; i++) {
        figure1[i].checked;
        return figure1[i].checked;
    }
}

function isUnderRookHit(rookX, rookY, checkedX, checkedY) {
    if (inputX1.value == inputX2.value || inputY1.value == inputY2.value);
}

function isUnderElephHit() {
    if ((Math.abs(inputX1.value - inputX2.value)) == (Math.abs(inputY1.value - inputY2.value)));
}

function isUnderKinghHit() {
    if () ;
}

function isUnderQueenHit() {
    if ((inputX1.value == inputX2.value || inputY1.value == inputY2.value) || ((Math.abs(inputX1.value - inputX2.value)) == (Math.abs(inputY1.value - inputY2.value))));
}
//        resultX.textContent = rook.value + ': x = ' + inputX1.value + '; ' + 'y = ' + inputY1.value;
