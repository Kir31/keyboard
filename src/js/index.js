import '../scss/style.scss';
import * as btns from './btns';

const body = document.querySelector('body');

const container = document.createElement('div');
const keyboard = document.createElement('div');

container.classList.add('container');
keyboard.classList.add('keyboard');
btns.textarea.classList.add('textarea');
btns.textarea.setAttribute('autofocus', '');

body.append(container);
container.append(btns.textarea);
container.append(keyboard);

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
    if (i > 0 && i < 11) {
      btn.innerHTML = i;
      btn.setAttribute('id', `Digit${i}`);
      btns.formNumBtn(i);
    }
    if (i === 10) {
      btn.innerHTML = 0;
      btn.setAttribute('id', 'Digit0');
      btns.formNumBtn(i + 1);
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
  for (let i = 0; i < 13; i += 1) {
    const btn = document.createElement('div');
    btn.classList.add('button');
    document.querySelector('.raw:nth-child(4)').append(btn);
  }
  for (let i = 0; i < 9; i += 1) {
    const btn = document.createElement('div');
    btn.classList.add('button');
    document.querySelector('.raw:last-child').append(btn);
  }
  btns.formDarkBtns();
  btns.formBtn('1', '12', '-', 'Minus');
  btns.formBtn('1', '13', '=', 'Equal');
  btns.formBtn('2', '2', 'Q', 'KeyQ');
  btns.formBtn('2', '3', 'W', 'KeyW');
  btns.formBtn('2', '4', 'E', 'KeyE');
  btns.formBtn('2', '5', 'R', 'KeyR');
  btns.formBtn('2', '6', 'T', 'KeyT');
  btns.formBtn('2', '7', 'Y', 'KeyY');
  btns.formBtn('2', '8', 'U', 'KeyU');
  btns.formBtn('2', '9', 'I', 'KeyI');
  btns.formBtn('2', '10', 'O', 'KeyO');
  btns.formBtn('2', '11', 'P', 'KeyP');
  btns.formBtn('2', '12', '[', 'BracketLeft');
  btns.formBtn('2', '13', ']', 'BracketRight');
  btns.formBtn('2', '14', '\\', 'Backslash');
  btns.formBtn('3', '2', 'A', 'KeyA');
  btns.formBtn('3', '3', 'S', 'KeyS');
  btns.formBtn('3', '4', 'D', 'KeyD');
  btns.formBtn('3', '5', 'F', 'KeyF');
  btns.formBtn('3', '6', 'G', 'KeyG');
  btns.formBtn('3', '7', 'H', 'KeyH');
  btns.formBtn('3', '8', 'J', 'KeyJ');
  btns.formBtn('3', '9', 'K', 'KeyK');
  btns.formBtn('3', '10', 'L', 'KeyL');
  btns.formBtn('3', '11', ';', 'Semicolon');
  btns.formBtn('3', '12', '\'', 'Quote');
  btns.formBtn('4', '2', 'Z', 'KeyZ');
  btns.formBtn('4', '3', 'X', 'KeyX');
  btns.formBtn('4', '4', 'C', 'KeyC');
  btns.formBtn('4', '5', 'V', 'KeyV');
  btns.formBtn('4', '6', 'B', 'KeyB');
  btns.formBtn('4', '7', 'N', 'KeyN');
  btns.formBtn('4', '8', 'M', 'KeyM');
  btns.formBtn('4', '9', ',', 'Comma');
  btns.formBtn('4', '10', '.', 'Period');
  btns.formBtn('4', '11', '/', 'Slash');
  btns.formBtn('5', '4', ' ', 'Space');
  document.addEventListener('keydown', (e) => {
    document.querySelectorAll('.button').forEach((btn) => {
      if (btn.getAttribute('id') === e.code) {
        btn.classList.add('active');
      }
    });
  });
  document.addEventListener('keyup', () => {
    document.querySelectorAll('.button').forEach((btn) => btn.classList.remove('active'));
  });
}
createKeyboard();
