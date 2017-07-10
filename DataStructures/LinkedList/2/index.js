class Link {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
    displayLink() {
        console.log(this.data + ' ');
    }
}

class DoublyLinkedList {
    constructor() {
        this.first = null;
        this.last = null;
    }

    isEmpty() {
        if (this.first === null) {
            return true;
        }
        else {
            return false;
        }
    }

    insertFirst(data) {
        let newLink = new Link(data);
        if (this.isEmpty()) {
            this.last = newLink;
        }
        else {
            this.first.prev = newLink;
        }
        newLink.next = this.first;
        this.first = newLink;
    }

    insertLast(data) {
        let newLink = new Link(data);
        if (this.isEmpty()) {
            this.first = newLink;
        }
        else {
            this.last.next = newLink;
            newLink.prev = this.last;
        }
        this.last = newLink;
    }

    deleteFirst() {
        let temp = this.first;
        if (this.first.next === null) {
            this.last = null;
        }
        else {
            this.first.next.prev = null;
        }
        this.first = this.first.next;
        return temp;
    }

    deleteLast() {
        let temp = this.last;
        if (this.first.next === null) {
            this.first = null;
        }
        else {
            this.last.prev.next = null;
        }
        this.last = this.last.prev;
        return temp;
    }

    insertAfter(key, data) {
        let current = this.first;
        while (current.data != key) {
            current = current.next;
            if (current === null) {
                return false;
            }
        }
        let newLink = new Link(data);
        if (current === this.last) {
            newLink.next = null;
            this.last = newLink;
        }
        else {
            newLink.next = current.next;
            current.next.prev = newLink;
        }
        newLink.prev = current;
        current.next = newLink;
        return true;
    }

    deleteKey(key) {
        let current = this.first;
        while (current.data != key) {
            current = current.next;
            if (current === null) {
                return null;
            }
        }
        if (current === this.first) {
            this.first = current.next;
        }
        else {
            current.prev.next = current.next;
        }
        if (current === this.last) {
            this.last = current.prev;
        }
        else {
            current.next.prev = current.prev;
        }
        return current;
    }

    displayForward() {
		console.log('theList')
		let current = this.first;
		while(current != null) {
			current.displayLink();
            current = current.next;
		}
	}

    displayBackward() {
        console.log('theList')
		let current = this.last;
        while(current != null) {
			current.displayLink();
            current = current.prev;
		}
    }
}

let theList = new DoublyLinkedList();

theList.insertFirst(22);
theList.insertFirst(44);
theList.insertFirst(66);

theList.insertLast(11);
theList.insertLast(33);
theList.insertLast(55);

theList.displayForward();
theList.displayBackward();

theList.deleteFirst();
theList.deleteLast();
theList.deleteKey(11);

theList.displayForward();

theList.insertAfter(22, 77);
theList.insertAfter(33, 88);

theList.displayForward();
