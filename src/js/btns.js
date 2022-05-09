export const textarea = document.createElement('textarea');

export const textareaArr = [];

export function createDarkBtn(raw, btn, id, text) {
  const button = document.querySelector(`.raw:nth-child(${raw}) .button:nth-child(${btn})`);
  button.classList.add('dark');
  button.setAttribute('id', id);
  button.innerHTML = text;
  button.addEventListener('click', () => {
    button.classList.add('active');
    button.addEventListener('animationend', () => button.classList.remove('active'));
    switch (button.getAttribute('id')) {
      case 'Backspace':
        textareaArr.pop();
        textarea.value = textareaArr.join('');
        break;
      case 'Tab':
        textareaArr.push('        ');
        textarea.value = textareaArr.join('');
        break;
      case 'Delete':

        break;
      case 'CapsLock':

        break;
      case 'Enter':
        textareaArr.push('\n');
        textarea.value = textareaArr.join('');
        break;
      case 'ArrowUp':

        break;
      case 'ArrowLeft':

        break;
      case 'ArrowDown':

        break;
      case 'ArrowRight':
        break;

      default:
        break;
    }
  });
}

export function formDarkBtns() {
  createDarkBtn('1', '14', 'Backspace', 'Backspace');
  createDarkBtn('1', '1', 'Backquote', '`');
  createDarkBtn('2', '1', 'Tab', 'Tab');
  createDarkBtn('2', '15', 'Delete', 'DEL');
  createDarkBtn('3', '1', 'CapsLock', 'CapsLock');
  createDarkBtn('3', '13', 'Enter', 'ENTER');
  createDarkBtn('4', '1', 'ShiftLeft', 'Shift');
  createDarkBtn('4', '12', 'ArrowUp', '&uarr;');
  createDarkBtn('4', '13', 'ShiftRight', 'Shift');
  createDarkBtn('5', '1', 'ControlLeft', 'Ctrl');
  createDarkBtn('5', '2', 'MetaLeft', 'Win');
  createDarkBtn('5', '3', 'AltLeft', 'Alt');
  createDarkBtn('5', '5', 'AltRight', 'Alt');
  createDarkBtn('5', '6', 'ControlRight', 'Ctrl');
  createDarkBtn('5', '7', 'ArrowLeft', '&larr;');
  createDarkBtn('5', '8', 'ArrowDown', '&darr;');
  createDarkBtn('5', '9', 'ArrowRight', '&rarr;');
}

export function formBtn(raw, btn, text, id) {
  const button = document.querySelector(`.raw:nth-child(${raw}) .button:nth-child(${btn})`);
  button.innerHTML = `${text}`;
  button.setAttribute('id', `${id}`);
  button.addEventListener('click', () => {
    textareaArr.push(`${text}`.toLowerCase());
    textarea.value = textareaArr.join('');
    button.classList.add('active');
  });
  button.addEventListener('animationend', () => button.classList.remove('active'));
}

export function formNumBtn(index) {
  const button = document.querySelector(`.raw:nth-child(1) .button:nth-child(${index})`);
  button.addEventListener('click', () => {
    textareaArr.push(button.innerHTML);
    textarea.value = textareaArr.join('');
    button.classList.add('active');
    button.addEventListener('animationend', () => button.classList.remove('active'));
  });
}
