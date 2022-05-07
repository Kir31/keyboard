import './scss/style.scss';

const body = document.querySelector('body');

const container = document.createElement('div');
const keyboard = document.createElement('div');
const textarea = document.createElement('textarea');

container.classList.add('container');
keyboard.classList.add('keyboard');
textarea.classList.add('textarea');

body.append(container);
container.append(textarea);
container.append(keyboard);

function createDarkBtn(btn, id, text) {
  btn.classList.add('dark');
  btn.setAttribute('id', id);
  btn.innerHTML = text;
}

function formDarkBtns() {
  createDarkBtn(document.querySelector('.raw:first-child .button:first-child'), 'backtick', '`');
  createDarkBtn(document.querySelector('.raw:first-child .button:last-child'), 'backspace', 'Backspace');
  createDarkBtn(document.querySelector('.raw:nth-child(2) .button:first-child'), 'tab', 'Tab');
  createDarkBtn(document.querySelector('.raw:nth-child(2) .button:last-child'), 'del', 'DEL');
  createDarkBtn(document.querySelector('.raw:nth-child(3) .button:first-child'), 'caps', 'Caps Lock');
  createDarkBtn(document.querySelector('.raw:nth-child(3) .button:last-child'), 'enter', 'ENTER');
  createDarkBtn(document.querySelector('.raw:nth-child(4) .button:first-child'), 'shift', 'Shift');
  createDarkBtn(document.querySelector('.raw:nth-child(4) .button:nth-child(13)'), 'up', '&uarr;');
  createDarkBtn(document.querySelector('.raw:nth-child(4) .button:last-child'), 'shift2', 'Shift');
  createDarkBtn(document.querySelector('.raw:nth-child(5) .button:first-child'), 'ctrl', 'Ctrl');
  createDarkBtn(document.querySelector('.raw:nth-child(5) .button:nth-child(2)'), 'win', 'Win');
  createDarkBtn(document.querySelector('.raw:nth-child(5) .button:nth-child(3)'), 'alt', 'Alt');
  createDarkBtn(document.querySelector('.raw:nth-child(5) .button:nth-child(5)'), 'alt2', 'Alt');
  createDarkBtn(document.querySelector('.raw:nth-child(5) .button:nth-child(6)'), 'ctrl2', 'Ctrl');
  createDarkBtn(document.querySelector('.raw:nth-child(5) .button:nth-child(7)'), 'left', '&larr;');
  createDarkBtn(document.querySelector('.raw:nth-child(5) .button:nth-child(8)'), 'down', '&darr;');
  createDarkBtn(document.querySelector('.raw:nth-child(5) .button:nth-child(9)'), 'right', '&rarr;');
}

function formBtn(raw, btn, text) {
  const button = document.querySelector(`.raw:nth-child(${raw}) .button:nth-child(${btn})`);
  button.innerHTML = `${text}`;
  button.addEventListener('click', () => {
    textarea.value = `${text}`.toLowerCase();
  });
}

function createKeyboard() {
  for (let i = 0; i < 5; i += 1) {
    const raw = document.createElement('div');
    raw.classList.add('raw');
    keyboard.append(raw);
  }
  for (let i = 0; i < 14; i += 1) {
    const btn = document.createElement('div');
    btn.classList.add('button');
    document.querySelector('.raw:first-child').append(btn);
    if (i > 0 && i < 10) {
      btn.innerHTML = i;
    }
  }
  for (let i = 0; i < 15; i += 1) {
    const btn = document.createElement('div');
    btn.classList.add('button');
    document.querySelector('.raw:nth-child(2)').append(btn);
  }
  for (let i = 0; i < 13; i += 1) {
    const btn = document.createElement('div');
    btn.classList.add('button');
    document.querySelector('.raw:nth-child(3)').append(btn);
  }
  for (let i = 0; i < 14; i += 1) {
    const btn = document.createElement('div');
    btn.classList.add('button');
    document.querySelector('.raw:nth-child(4)').append(btn);
  }
  for (let i = 0; i < 9; i += 1) {
    const btn = document.createElement('div');
    btn.classList.add('button');
    document.querySelector('.raw:last-child').append(btn);
  }
  formDarkBtns();
  document.querySelector('.raw:nth-child(5) .button:nth-child(4)').setAttribute('id', 'space');
  formBtn('1', '11', '0');
  formBtn('1', '12', '-');
  formBtn('1', '13', '=');
  formBtn('2', '2', 'Q');
  formBtn('2', '3', 'W');
  formBtn('2', '4', 'E');
  formBtn('2', '5', 'R');
  formBtn('2', '6', 'T');
  formBtn('2', '7', 'Y');
  formBtn('2', '8', 'U');
  formBtn('2', '9', 'I');
  formBtn('2', '10', 'O');
  formBtn('2', '11', 'P');
  formBtn('2', '12', '[');
  formBtn('2', '13', ']');
  formBtn('2', '14', '\\');
  formBtn('3', '2', 'A');
  formBtn('3', '3', 'S');
  formBtn('3', '4', 'D');
  formBtn('3', '5', 'F');
  formBtn('3', '6', 'G');
  formBtn('3', '7', 'H');
  formBtn('3', '8', 'J');
  formBtn('3', '9', 'K');
  formBtn('3', '10', 'L');
  formBtn('3', '11', ';');
  formBtn('3', '12', '\'');
  formBtn('4', '2', '\\');
  formBtn('4', '3', 'Z');
  formBtn('4', '4', 'X');
  formBtn('4', '5', 'C');
  formBtn('4', '6', 'V');
  formBtn('4', '7', 'B');
  formBtn('4', '8', 'N');
  formBtn('4', '9', 'M');
  formBtn('4', '10', '<');
  formBtn('4', '11', '>');
  formBtn('4', '12', '/');
}
createKeyboard();
