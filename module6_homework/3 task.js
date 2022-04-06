function example(a){
    return function(b){
        console.log(a+b); // Сумма
    };

}

const result = example(5);  // Первое число
result(6); // Второе число




