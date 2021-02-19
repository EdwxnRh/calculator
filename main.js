'use strict';

const nums = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.btn');
let output = document.querySelector('.out-num');
let outputWay = document.querySelector('.out-way');
let currentOutput = 0;
let prevOutput;
let operatorS;
let x;

console.log(nums);

for (const button of nums) {
  button.addEventListener('click', function () {
    console.log(button.textContent);
    output.textContent += button.textContent;
    currentOutput = parseFloat(output.textContent);
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
        currentOutput = 0;
        break;
      default:
        break;
    }
  });
}

for (const operator of operators) {
  operator.addEventListener('click', function () {
    operatorS = operator.textContent;

    if (operator.textContent == ',') {
      if (!output.textContent.includes('.') && output.textContent.length > 0) {
        output.textContent += '.';
      }
    } else if (output.textContent.length > 0) {
      if (outputWay.textContent.length === 0) {
        outputWay.textContent = output.textContent;
        output.textContent = '';
        if (outputWay.textContent.length >= 39) {
          outputWay.classList.add('hidden');
          console.log('hey');
        }
      } else {
        outputWay.textContent += ' ' + operatorS + ' ' + output.textContent;
        if (outputWay.textContent.length >= 39) {
          outputWay.classList.add('hidden');
        }
        output.textContent = '';
      }
    } else if (output.textContent.length === 0) {
    }
    //     } else if (output.textContent.length > 0) {
    //       operatorS = operator.textContent;
    //       if (prevOutput === undefined) {
    //         prevOutput = currentOutput;
    //         currentOutput = 0;
    //       }
    //       if (output.textContent.length >= 29) {
    //         outputWay.textContent = 'wayyy too big number ._.';
    //       }
    //       output.textContent = '';
    //       if (operatorS != undefined && x === undefined) {
    //         compute(operatorS);
    //         output.textContent = '';
    //         outputWay.textContent = `${prevOutput} ${operatorS} `;
    //         x = operatorS;
    //         operatorS = undefined;
    //       }
    //       if (x != undefined && operatorS != undefined) {
    //         compute(x);
    //         x = operatorS;
    //         output.textContent = '';
    //         outputWay.textContent = `${prevOutput} ${operatorS} `;
    //       }
    //     } else {
    //       operatorS = operator.textContent;
    //       x = operatorS;
    //       if (prevOutput === undefined) {
    //         prevOutput = 0;
    //         outputWay.textContent = `${prevOutput} ${operatorS}`;
    //       } else {
    //         outputWay.textContent = `${prevOutput} ${operatorS}`;
    //       }
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
