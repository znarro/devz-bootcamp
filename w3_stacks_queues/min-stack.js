/* eslint-disable max-classes-per-file */

// Implementa un stack de enteros con sus operaciones push, pop, peek y una funcion getMin que obtendra el valor mas pequeño de la pila. Todas las operaciones
// (incluyendo getMin) deben ser constantes (O(1)).

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor(head = null) {
    this.head = head;
    this.min = Infinity;
  }

  push(newData) {
    const newNode = new Node(newData);
    // Head siempre será el nuevo node
    const currentHead = this.head;
    this.head = newNode;
    newNode.next = currentHead;
    // Si el nuevo value es menor, actualizo min value
    if (newNode.data < this.min) {
      this.min = newNode.data;
    }
  }

  pop() {
    // Si el stack no está vacío
    if (this.head) {
      const currentHead = this.head;
      this.head = currentHead.next;
      // Si el node que estoy removiendo era el min value
      if (currentHead.data === this.min) {
        // Actualizo min
        this.min = Infinity;
        let currentNode = this.head;
        while (currentNode) {
          if (currentNode.data < this.min) {
            this.min = currentNode.data;
          }
          currentNode = currentNode.next;
        }
      }
    }
  }

  getMin() {
    return this.min;
  }
}

const stack1 = new Stack();
stack1.push(1);
stack1.push(6);
stack1.push(5);
stack1.push(-10);
console.log("Push test", JSON.stringify(stack1, null, 4));
stack1.pop();
console.log("Pop test", JSON.stringify(stack1, null, 4));
console.log("GetMin test:", stack1.getMin());
