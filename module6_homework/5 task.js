const numOne = 2;
const numTwo = 5;

//Упрощенный синтаксис
const check = (num1,num2) => {
    console.log (Math.pow(num1, num2));
}

// Проверка на натуральное число
if (numOne ^ 0 && numTwo ^ 0) {
    if (numOne > 0 && numTwo > 0) {
        check(numOne, numTwo);
    } else {
        console.log('Введите натуральное число');
    }
} else {
    console.log('Введите натуральное число');
}



