/* eslint-disable max-classes-per-file */

// Implementa un algoritmo que encuentre nodo k lugares antes del último nodo.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  push(newData) {
    const newNode = new Node(newData);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
  }
}

// Test 1
const data1 = [2, 3, 1, 4, 9, 10, 11];
const llist1 = new LinkedList();
data1.forEach((item) => llist1.push(item));
