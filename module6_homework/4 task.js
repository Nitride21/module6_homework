const numOne = 5;
const numTwo = 10;
const sum = numTwo - numOne; // Разность чисел для таймера
let check = numOne; // Переменная для счета

//console.log(sum);

// Функция для инкремента счета
function numCheck() {
    console.log(check);
    check++;
}

//Функция для интервала
const intervalFunc = function () {
    const intervalId = setInterval(numCheck, 1000); // интервал в 1 сек

    setTimeout(function () {
        clearInterval(intervalId)
    }, (sum + 2) * 1000); // Вводим таймер на очистку. Не понимаю куда деваются 2 секунды? Поэтому (sum +2).
}

// Проверка
if (numOne >= numTwo) {
    console.log('Числа введены неверно');
} else {
    intervalFunc();
}



