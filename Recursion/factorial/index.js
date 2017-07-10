function factorial(number) {
    if (number === 1) {
        console.log('Returning 1');
        return 1;
    }
    else {
        let temp = number * factorial(number - 1);
        console.log('Returning ' + temp);
        return temp;
    }
}

factorial(5);
