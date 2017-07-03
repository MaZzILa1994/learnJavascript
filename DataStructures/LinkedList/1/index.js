class Link {
	constructor(id, data) {
		this.id = id;
		this.data = data;
		this.next = null;
	}
}

class LinkList {
	constructor() {
		this.first = null;
	}

	insertFirst(id, data) {
		let newLink = new Link(id, data);
		newLink.next = this.first;
		this.first = newLink;
	}

	find(key) {
		let current = this.first;
		while (current.id != key) {
			if (current.next == null) {
				console.log(key + ' nety!');
				return null;
			}
			else {
				current = current.next;
			}
		}
		console.log("Ya nashel' " + key + "!")
		return current;
	}

	del(key) {
		let current = this.first;
		let previous = this.first;
		while (current.id != key) {
			if(current.next === null) {
				return null;
			}
			else {
				previous = current;
				current = current.next;
			}
		}
		if(current === this.first) {
			this.first = this.first.next;
		}
		else {
			previous.next = current.next;
		}
		console.log("Udalil' " + key);
		return current;
	}

	displayList() {
		console.log('theList')
		let current = this.first;
		while(current != null) {
			console.log('id = ' + current.id + ';' + 'Data = ' + current.data);
			current = current.next;
		}
	}
}

let theList = new LinkList();

theList.insertFirst(1, 9);
theList.insertFirst(2, 8);
theList.insertFirst(3, 7);
theList.insertFirst(4, 6);

theList.displayList();

theList.find(2);
theList.find(12);

theList.del(4);

theList.displayList();
