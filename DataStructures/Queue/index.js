let maxSize = 5;
let myArray = [maxSize];
let front = 0;
let rear = -1;
let nItems = 0;

function insert(value) {
    if (rear === maxSize-1) {
        rear = -1;
    }
    myArray[++rear] = value;
    nItems++;
}

function del() {
    let temp = myArray[front++];
    if (front === maxSize) {
        front = 0;
    }
    nItems--;
    return temp;
}

function peekFront() {
    return myArray[front];
}

function isEmpty() {
    if (nItems === 0) {
        return true;
    }
    else {
        return false;
    }
}

function isFull() {
    if (nItems === maxSize) {
        return true;
    }
    else {
        return false;
    }
}

function size() {
    return nItems;
}

insert(10);
insert(20);
insert(30);
insert(40);

console.log(myArray);

console.log(del());
console.log(del());
console.log(del());

insert(50);
insert(60);
insert(70);
insert(80);

console.log(myArray);

while (!isEmpty()) {
    console.log(del());
}
