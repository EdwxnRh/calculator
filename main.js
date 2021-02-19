'use strict';

const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.btn');
let output = document.querySelector('.out-num');
let outputWay = document.querySelector('.out-way');
let calc = '';
let x;
let operatorS;

console.log(nums);

for (const button of nums) {
  button.addEventListener('click', function () {
    console.log(button.textContent);
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

    if (operator.textContent == ',') {
      if (!output.textContent.includes('.') && output.textContent.length > 0) {
        output.textContent += '.';
      }
    } else if (output.textContent.length > 0) {
      console.log('YES');
      if (outputWay.textContent.length === 0) {
        console.log('OUTPUT LEER');
        calc = output.textContent + ' ' + operator.textContent;
        outputWay.textContent = calc;
        output.textContent = '';
      } else {
        if (
          x.startsWith('+') ||
          x.startsWith('-') ||
          x.startsWith('*') ||
          x.startsWith('/')
        ) {
          console.log('OUTPUT VOOLL');
          calc += ' ' + output.textContent + ' ' + operator.textContent;
          outputWay.textContent = calc;
          output.textContent = '';
        }
      }
    } else if (output.textContent.length === 0) {
      console.log('NO');
      if (
        x.startsWith('+') ||
        x.startsWith('-') ||
        x.startsWith('*') ||
        x.startsWith('/')
      ) {
        outputWay.textContent = calc;
      }
    }
    if (outputWay.textContent.length >= 39 && outputWay.text) {
      outputWay.textContent = `...`;
    }
    console.log(calc);
  });
}

// function compute(operator) {
//   switch (operator) {
//     case '+':
//       prevOutput = parseFloat(prevOutput) + parseFloat(currentOutput);
//       break;
//     case '-':
//       prevOutput = parseFloat(prevOutput) - parseFloat(currentOutput);
//       break;
//     case '*':
//       prevOutput = parseFloat(prevOutput) * parseFloat(currentOutput);
//       break;
//     case '/':
//       console.log('hello');
//       if (currentOutput === 0) {
//         output.textContent = 'Error';
//       }
//       prevOutput = parseFloat(prevOutput) / parseFloat(currentOutput);
//       break;

//     default:
//       break;
//   }
// }
