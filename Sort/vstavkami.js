function Sort() {
    var myArray = [6, 3, 5, 8, 1, 2, 4, 7];
    for (var i = 0; i < myArray.length - 1; i++) {
        var currentElement = myArray[i];
        var j = i - 1;
        while (j >= 0 && myArray[j] > currentElement) {
            myArray[j + 1] = myArray[j];
            j = j - 1;
        }
        myArray[j + 1] = currentElement;
    }
    console.log(myArray);
}

Sort();
