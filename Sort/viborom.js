function Sort() {
    var myArray = [3, 2, 7, 1, 4, 6, 8];
    var swap;
    for (var i = 0; i < myArray.length - 1; i++) {
       var min = i;
       for (var j = i+1; j < myArray.length; j++) {
         if (myArray[j] < myArray[min]) min = j;
       }
       var swap = myArray[min];
       myArray[min] = myArray[i];
       myArray[i] = swap;

    }
   console.log(myArray);
}
Sort();
