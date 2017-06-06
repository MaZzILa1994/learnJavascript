function Sort() {
    var myArray = [5, 2, 3, 1, 7, 6, 4];
    var swap;
    for (var i = myArray.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (myArray[j] > myArray[j+1]) {
                swap = myArray[j];
                myArray[j] = myArray[j+1];
                myArray[j+1] = swap;
            }
        }
    }
  console.log(myArray);
 };

 Sort();
