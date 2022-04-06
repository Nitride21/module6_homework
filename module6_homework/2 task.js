const Num = 2;
//Проверка числа в цикле на целое. Если целое - число не простое. Если с остатком - число простое.
const justNumber = function (exNum) {
    for (let i = 2; i < exNum; i++) {
        if (exNum % i == 0) {
            return console.log('Число не простое');
        }
    }
    return console.log('Число простое');
}
// Проверка числа в диапазоне
if (Num < 1000 && Num >= 0) {
    if (Num == 0 || Num == 1) {
        console.log('Число не простое');
    } else {
//    console.log('Данные верны');
    justNumber(Num);
    }
} else {
    console.log('Данные неверны');
}
