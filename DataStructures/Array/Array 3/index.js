class Developer {
    constructor(last, first, age) {
        this.lastName = last;
        this.firstName = first;
        this.age = age;
    }

    displayDeveloper() {
        console.log("Фамилия: " + this.lastName);
        console.log("Имя: " + this.firstName);
        console.log("Возраст: " + this.age);
    }

    getLastName() {
        return this.lastName;
    }
}

function insert(last, first, age) {
    myArray[nElems] = new Developer(last, first, age);
    nElems++;
}

function find(searchName) {
    let j;
    for (j = 0; j < nElems; j++) {
        if (myArray[j].getLastName() === searchName)
        break;
    }
    if (j === nElems) {
        return true;
    }
    else {
        found = myArray[j]
        return found;
    }
}

function del(searchName) {
    let j;
    for (j = 0; j < nElems; j++) {
        if (myArray[j].getLastName() === searchName)
        break;
    }
    if (j === nElems) {
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
        myArray[j].displayDeveloper();
    }
}

let myArray = [];
let nElems = 0;

insert("Петров", "Андрей", "24-25");
insert("Яковлев", "Денис", "???");
insert("Павлов", "Михаил", "???");
insert("Сачивко", "Сергей", "???");
insert("Селезнев", "Роман", "22");
insert("Левый", "Тип", "100500");

display();

let searchKey = "Селезнев";
if (find(searchKey) != null) {
    console.log("Нашел");
    found.displayDeveloper();
}
else {
    console.log("Не могу найти " + searchKey);
}

console.log("Удаляем левого типа");
del("Левый");

display();
