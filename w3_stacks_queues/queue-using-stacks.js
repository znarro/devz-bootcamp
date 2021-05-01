/* eslint-disable max-classes-per-file */

// Implementar una cola usando dos pilas.
// Asumiendo que solo pudieras usar las operaciones de pila, ¿Cómo conseguirías el comportamiento de una cola?

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }

  push(newData) {
    const newNode = new Node(newData);
    const currentHead = this.head;
    this.head = newNode;
    if (this.head) {
      this.head.next = currentHead;
    }
    this.size += 1;
  }

  pop() {
    if (this.head) {
      const currentHead = this.head;
      this.head = currentHead.next;
      this.size -= 1;
      return currentHead.data;
    }
    return null;
  }
}

class FakeQueue {
  constructor() {
    this.stack = new Stack();
    this.tempStack = new Stack();
  }

  push(newData) {
    this.stack.push(newData);
  }

  dequeue() {
    // Si hay más de un elemento en el stack
    if (this.stack.size > 1) {
      // Traslado los top nodes al stack temporal hasta llegar al que quiero borrar
      for (let i = 0; i < this.stack.size; i++) {
        const popped = this.stack.pop();
        this.tempStack.push(popped);
      }
      // Dequeue el node
      this.stack.pop();
      // Devuelvo los elementos del stack temporal al original
      let currentNode = this.tempStack.head;
      while (currentNode) {
        const tempPopped = this.tempStack.pop();
        this.stack.push(tempPopped);
        currentNode = currentNode.next;
      }
    } else {
      // Si no, solo dequeue el node
      this.stack.pop();
    }
  }

  getSize() {
    return this.stack.size;
  }

  isEmpty() {
    const isNotEmpty = !!this.getSize();
    return !isNotEmpty;
  }
}

const queue = new FakeQueue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log("Push test:", JSON.stringify(queue, null, 4));
queue.dequeue();
console.log("Dequeue test:", JSON.stringify(queue, null, 4));
console.log("GetSize test:", queue.getSize());
console.log("IsEmpty test (not empty):", queue.isEmpty());
queue.dequeue();
queue.dequeue();
console.log("IsEmpty test (empty):", queue.isEmpty());
