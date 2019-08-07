//получение координат
const inputX1 = document.querySelector('.inputX1');
const inputY1 = document.querySelector('.inputY1');
const inputX2 = document.querySelector('.inputX2');
const inputY2 = document.querySelector('.inputY2');

//получение места для вывода результата
const resultX = document.querySelector('.resultX');
const resultY = document.querySelector('.resultY');

//получение кнопки
const btn = document.querySelector('.btn');

// получение первой radioGruop по id
const king1 = document.getElementById('customRadio1');
const queen1 = document.getElementById('customRadio2');
const rook1 = document.getElementById('customRadio3');
const eleph1 = document.getElementById('customRadio4');
const horse1 = document.getElementById('customRadio5');
const pawn1 = document.getElementById('customRadio6');

// получение второй radioGruop по id
const king2 = document.getElementById('customRadio1');
const queen2 = document.getElementById('customRadio2');
const rook2 = document.getElementById('customRadio3');
const eleph2 = document.getElementById('customRadio4');
const horse2 = document.getElementById('customRadio5');
const pawn2 = document.getElementById('customRadio6');

//вызов главной функции при клике на btn
document.getElementById('btn').onclick = handlStatus;

// получение радиогрупп
const chessmanRadioGroup1 = document.getElementsByName('customRadio');
const chessmanRadioGroup2 = document.getElementsByName('customRadio1');

function handlStatus() {
    //получение координат
    const chessmanX1 = Number(inputX1.value);
    const chessmanY1 = Number(inputY1.value);
    const chessmanChecked1 = getCheckedRadioButton(chessmanRadioGroup1);

    const chessmanX2 = Number(inputX2.value);
    const chessmanY2 = Number(inputY2.value);
    const chessmanChecked2 = getCheckedRadioButton(chessmanRadioGroup2);

    if (!isValidInput(chessmanX1, chessmanY1, chessmanX2, chessmanY2, chessmanChecked1, chessmanChecked2)) {
        alert('Форма заполнена не правильно');
        return;
    }

    let resultFigure1;
    switch (chessmanChecked1.value) {
        case king1.value:
            resultFigure1 = isUnderKinghHit(chessmanX1, chessmanX2, chessmanY1, chessmanY2);
            break;
        case queen1.value:
            resultFigure1 = isUnderQueenHit(chessmanX1, chessmanX2, chessmanY1, chessmanY2);
            break;
        case rook1.value:
            resultFigure1 = isUnderRookHit(chessmanX1, chessmanX2, chessmanY1, chessmanY2);
            break;
        case eleph1.value:
            resultFigure1 = isUnderElephHit(chessmanX1, chessmanX2, chessmanY1, chessmanY2);
            break;
        case horse1.value:
            resultFigure1 = isUnderHorseHit(chessmanX1, chessmanX2, chessmanY1, chessmanY2);
            break;
        case pawn1.value:
            resultFigure1 = isUnderPawnHit(chessmanX1, chessmanX2, chessmanY1, chessmanY2);
            break;
        default:
            alert('упс, что-то не так');
    }
    if (resultFigure1 == true) {
        resultX.textContent = `Фигура 1 бьёт Фигуру 2`;
    } else {
        resultX.textContent = `Фигура 1 не бьёт Фигуру 2`;
    }

    let resultFigure2;
    switch (chessmanChecked2.value) {
        case king2.value:
            resultFigure2 = isUnderKinghHit(chessmanX2, chessmanX1, chessmanY2, chessmanY1);
            break;
        case queen2.value:
            resultFigure2 = isUnderQueenHit(chessmanX2, chessmanX1, chessmanY2, chessmanY1);
            break;
        case rook2.value:
            resultFigure2 = isUnderRookHit(chessmanX2, chessmanX1, chessmanY2, chessmanY1);
            break;
        case eleph2.value:
            resultFigure2 = isUnderElephHit(chessmanX2, chessmanX1, chessmanY2, chessmanY1);
            break;
        case horse2.value:
            resultFigure2 = isUnderHorseHit(chessmanX2, chessmanX1, chessmanY2, chessmanY1);
            break;
        case pawn2.value:
            resultFigure2 = isUnderPawnHit(chessmanX2, chessmanX1, chessmanY2, chessmanY1);
            break;
        default:
            alert('упс, что-то не так');
    }
    if (resultFigure2 == true) {
        resultY.textContent = `Фигура 2 бьёт Фигуру 1`;
    } else {
        resultY.textContent = `Фигура 2 не бьёт Фигуру 1`;
    }
}

// проверка на валидность координат
function isValidInput(text1, text2, text3, text4, button1, button2) {
    return text1 !== ''
        && text2 !== ''
        && text3 !== ''
        && text4 !== ''
        && button1 !== null
        && button2 !== null;
}

// проверка на checked radiobutton
function getCheckedRadioButton(radioGroup) {
    for (let i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
            return radioGroup[i];
        }
    }
    return null;
}

function isUnderKinghHit(coorX1, coorX2, coorY1, coorY2) {
    let status = ((coorX1 == coorX2) && (coorY1 == coorY2 - 1))
        || ((coorX1 == coorX2) && (coorY1 == coorY2 + 1))
        || ((coorX1 == coorX2 + 1) && (coorY1 == coorY2))
        || ((coorX1 == coorX2 - 1) && (coorY1 == coorY2))
        || ((coorX1 == coorX2 + 1) && (coorY1 == coorY2 - 1))
        || ((coorX1 == coorX2 - 1) && (coorY1 == coorY2 - 1))
        || ((coorX1 == coorX2 + 1) && (coorY1 == coorY2 + 1))
        || ((coorX1 == coorX2 - 1) && (coorY1 == coorY2 + 1));
    return status;
}

function isUnderQueenHit(coorX1, coorX2, coorY1, coorY2) {
    return (coorX1 == coorX2 || coorY1 == coorY2) || ((Math.abs(coorX1 - coorX2)) == (Math.abs(coorY1 - coorY2)));
}

function isUnderRookHit(coorX1, coorX2, coorY1, coorY2) {
    return coorX1 == coorX2 || coorY1 == coorY2;
}

function isUnderElephHit(coorX1, coorX2, coorY1, coorY2) {
    return (Math.abs(coorX1 - coorX2)) == (Math.abs(coorY1 - coorY2));
}

function isUnderHorseHit(coorX1, coorX2, coorY1, coorY2) {
    let status = ((coorX1 == coorX2 - 1) && (coorY1 == coorY2 - 2))
        || ((coorX1 == coorX2 + 1) && (coorY1 == coorY2 - 2))
        || ((coorX1 == coorX2 - 2) && (coorY1 == coorY2 - 1))
        || ((coorX1 == coorX2 - 2) && (coorY1 == coorY2 + 1))
        || ((coorX1 == coorX2 - 1) && (coorY1 == coorY2 + 2))
        || ((coorX1 == coorX2 + 1) && (coorY1 == coorY2 + 2))
        || ((coorX1 == coorX2 + 2) && (coorY1 == coorY2 + 1))
        || ((coorX1 == coorX2 + 2) && (coorY1 == coorY2 - 1));
    return status;
}

function isUnderPawnHit(coorX1, coorX2, coorY1, coorY2) {
    let status = ((coorX1 == coorX2 - 1) && (coorY1 == coorY2 - 1))
        || ((coorX1 == coorX2 + 1) && (coorY1 == coorY2 - 1))
        || ((coorX1 == coorX2 + 1) && (coorY1 == coorY2 + 1))
        || ((coorX1 == coorX2 - 1) && (coorY1 == coorY2 + 1))
    return status;
}