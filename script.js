let display = document.getElementById('calcDisplay');
let off = document.getElementById('off')
let calc = document.getElementById('calc');
let clear = document.getElementById('clear');
let del = document.getElementById('delete');
let zero = document.getElementById('zero');
let menu = document.getElementById('menu');

off.onclick = function() {
    calc.style.display = 'none'
}

menu.onclick = function() {
   document.querySelector('#menu .fa-bars').classList.toggle('fa-times')
   calc.classList.toggle('active')
   document.getElementById('side').classList.toggle('active')
}

function num(val) {
    display.value += val;
}

function sum(sum) {
    let val = display.value;
    if (val.length != 0) {
        if (val.slice(-1) == '/' || val.slice(-1) == '*' || val.slice(-1) == '-' || val.slice(-1) == '+') {
            display.value = display.value.slice(0, -1);
            display.value += sum
        }
        else {
            display.value += sum;
        }
    }
}

function count() {
    let his = document.getElementsByClassName('history')[0];
    let hisItem = document.createElement('div');
    hisItem.setAttribute('class', 'his-item');
    hisItem.innerHTML = display.value + '=' + eval(display.value)
    his.appendChild(hisItem)
    display.value = eval(display.value)
}

clear.onclick = function () {
    display.value = ''
}

del.onclick = function () {
    display.value = display.value.slice(0, -1);
}

zero.onclick = function () {
    if ((display.value).length == 0) {
        display.value += 0 + '.'
    } else {

        display.value += 0
    }
}