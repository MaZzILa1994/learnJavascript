function triangle(number) {
    if (number === 1) {
        console.log('Returning 1');
        return 1;
    }
    else {
        let temp = number + triangle(number - 1);
        console.log('Returning '+temp);
        return temp;
    }
}

triangle(5);
