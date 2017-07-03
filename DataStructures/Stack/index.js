let maxSize = 5;
let myArray = [maxSize];
let topOfStack = -1;

function push(value) {
    myArray[++topOfStack] = value;
}

function pop() {
    return myArray[topOfStack--];
}

function peek() {
    return myArray[topOfStack];
}

function isEmpty() {
    if (topOfStack === -1) {
        return true;
    }
    else {
        return false;
    }
}

function isFull() {
    if (top === maxSize-1) {
        return true;
    }
    else {
        return false;
    }
}

push(11);
push(22);
push(33);
push(44);

console.log(myArray);

console.log(pop());

while (!isEmpty()) {
    console.log(pop());
}
