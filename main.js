// 'use strict';

const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.btn1');
const clear = document.querySelector('.clear');
const enter = document.querySelector('.enter');
const outputBtn = document.querySelector('.output');
let output = document.querySelector('.out-num');
let outputWay = document.querySelector('.out-way');
let calc = '';
let x;
let copyText;
let result;
let i = 0;

for (const button of nums) {
  button.addEventListener('click', function () {
    if (
      i === 1 &&
      outputWay.textContent === 'click to copy' &&
      output.textContent !==//// 0
    ) {
      output.textContent = '';
      calc = '';
      outputWay.textContent = '';
      i = 0;
    }
    output.textContent += button.textContent;
    switch (output.textContent.length) {
      case 10:
        output.style.fontSize = '40px';
        output.style.top = '15px';
        break;
      case 12:
        output.style.fontSize = '30px';
        output.style.top = '30px';
        break;
      case 15:
        output.style.fontSize = '20px';
        output.style.top = '45px';
        break;
      case 22:
        output.textContent = '';
        output.style.fontSize = '45px';
        output.style.top = '10px';
        break;
      default:
        break;
    }
  });
}

for (const operator of operators) {
  operator.addEventListener('click', function () {
    x = calc.charAt(calc.length - 1);
    if (
      i === 1 &&
      outputWay.textContent === 'click to copy' &&
      output.textContent !== 0
    ) {
      output.textContent = '';
      calc = result + ' ' + operator.textContent;
      outputWay.textContent = calc;
      i = 0;
    } else if (operator.textContent == ',') {
      if (!output.textContent.includes('.') && output.textContent.length > 0) {
        output.textContent += '.';
      }
    } else if (output.textContent.length > 0) {
      if (outputWay.textContent.length === 0) {
        calc = output.textContent + ' ' + operator.textContent;
        outputWay.textContent = calc;
        output.textContent = '';
      } else {
        x = calc.charAt(calc.length - 1);
        if (
          x.startsWith('+') ||
          x.startsWith('-') ||
          x.startsWith('*') ||
          x.startsWith('/') ||
          x.startsWith('%') ||
          x.startsWith('**')
        ) {
          calc += ' ' + output.textContent + ' ' + operator.textContent;
          outputWay.textContent = calc;
          output.textContent = '';
        }
      }
    } else if (output.textContent.length === 0) {
      if (
        x.startsWith('+') ||
        x.startsWith('-') ||
        x.startsWith('*') ||
        x.startsWith('/') ||
        x.startsWith('%')
      ) {
        if (x.startsWith('*') && calc.charAt(calc.length - 2) === '*') {
          calc = calc.substring(0, calc.length - 1);
          calc = calc.substring(0, calc.length - 1) + operator.textContent;
          outputWay.textContent = calc;
        } else {
          calc = calc.substring(0, calc.length - 1) + operator.textContent;
          outputWay.textContent = calc;
        }
      }
    }
    if (outputWay.textContent.length >= 39) {
      outputWay.textContent = `... ${operator.textContent}`;
    }
    console.log(calc);
  });
}

clear.addEventListener('click', function () {
  calc = '';
  x = '';
  i = 0;
  output.textContent = '';
  outputWay.textContent = '';
});

enter.addEventListener('click', function () {
  if (i === 0) {
    if (outputWay.textContent.length === 0 && output.textContent.length !== 0) {
      calc = output.textContent;
      outputWay.textContent = 'click to copy';
      result = eval(calc);
      output.textContent = result;
      i = 1;
    } else if (
      outputWay.textContent.length !== 0 &&
      output.textContent.length === 0
    ) {
      calc = calc.substring(0, calc.length - 1) + ' ';
      outputWay.textContent = 'click to copy';
      result = eval(calc);
      output.textContent = result;
      i = 1;
    } else if (
      outputWay.textContent.length !== 0 &&
      output.textContent.length !== 0 &&
      outputWay.textContent !== 'click to copy'
    ) {
      calc += output.textContent;
      result = eval(calc);
      output.textContent = result;
      outputWay.textContent = 'click to copy';
      i = 1;
    } else if (
      outputWay.textContent.length === 0 &&
      outputWay.textContent.length === 0
    ) {
      result = 0;
      output.textContent = result;
      outputWay.textContent = 'click to copy';
      i = 1;
    }
  }
  resizeOutput();
});

function resizeOutput() {
  switch (result.length) {
    case 10:
      output.style.fontSize = '40px';
      output.style.top = '15px';
      break;
    case 12:
      output.style.fontSize = '30px';
      output.style.top = '30px';
      break;
    case 15:
      output.style.fontSize = '20px';
      output.style.top = '45px';
      break;
    case 22:
      output.textContent = 'Number to big! ';
      outputWay.textContent = 'click to copy';
      output.style.fontSize = '40px';
      output.style.top = '10px';
      break;
    default:
      break;
  }
}

outputBtn.addEventListener('click', function () {
  let range = document.createRange();
  range.selectNode(output);
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand('copy');
  window.getSelection().removeAllRanges(); // to deselect
});
