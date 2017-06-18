let myArray = [];
let nElems = 0;

function insert(value) {
    myArray[nElems] = value;
    nElems++;
}

function find(searchKey) {
    let j;
    for (j = 0; j < nElems; j++) {
        if (myArray[j] == searchKey)
        break;
    }
    if (j == nElems) {
        return false;
    }
    else {
        return true;
    }
}

function del(value) {
    let j;
    for (j = 0; j < nElems; j++) {
        if (value == myArray[j])
        break;
    }
    if (j == nElems) {
        return false;
    }
    else {
        for (let k = j; k < nElems; k++) {
            myArray[k] = myArray[k + 1];
        }
        nElems--;
        return true;
    }
}

function display() {
    for (let j = 0; j < nElems; j++) {
        console.log(myArray[j] + ' ');
    }
}

insert(11);
insert(22);
insert(55);
insert(33);
insert(44);
insert(77);
insert(99);
insert(66);
insert(88);
insert(00);

display();

let searchKey_1 = 45;
if (find(searchKey_1)) {
    console.log("Нашел " + searchKey_1);
}
else {
    console.log("Не нашел " + searchKey_1);
}

let searchKey_2 = 44;
if (find(searchKey_2)) {
    console.log("Нашел " + searchKey_2);
}
else {
    console.log("Не нашел " + searchKey_2);
}

del(55);
del(00);

display();
