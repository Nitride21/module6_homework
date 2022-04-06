function numParity() {
const arr = [2, 4, 5, , 9, 7]; // Массив
let exam;
let numberMass;
let evenNum = 0;
let oddNum = 0;
let nunNum = 0;
for (let i = 0; i < arr.length; i++) {  // Перебор каждого числа в массиве
    numberMass = arr[i];
//    console.log(typeof numberMass);
    // Проверка на число
    if (typeof numberMass === 'number') {
        exam = true
    }
    if (exam ) {
        if (numberMass % 2 === 0) {  // Проверка на четность
            evenNum++
        } else {
            oddNum++
        }
    } else if (typeof numberMass === 'undefined'){  // Проверка на нулевой элемент
        nunNum++
    }
    exam = false;
}
console.log('Число четных чисел = ' + evenNum);
console.log('Число нечетных чисел = ' + oddNum);
console.log('Нулевой элемент = ' + nunNum);
}

numParity();