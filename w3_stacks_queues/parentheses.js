/* eslint-disable max-classes-per-file */

// Crea una función que regrese el mínimo número de paréntesis que hay que agregar para que los paréntesis sean válidos.

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
    this.head.next = currentHead;
    this.size += 1;
  }

  pop() {
    const currentHead = this.head;
    if (currentHead) {
      this.head = currentHead.next;
      this.size -= 1;
      return currentHead.data;
    }
    return null;
  }

  peek() {
    if (this.head) {
      return this.head.data;
    }
    return null;
  }

  getSize() {
    return this.size;
  }

  isEmpty() {
    const isNotEmpty = !!this.peek();
    return !isNotEmpty;
  }
}

function getMinParensToBeValid(parens) {
  const stack = new Stack();

  for (let i = 0; i < parens.length; i++) {
    const currentParens = parens[i];
    // Si el stack está vacío o su head es el parens que cierra, inserto
    if (stack.isEmpty() || stack.head.data === ")") {
      stack.push(currentParens);
    }
    // Si por el contrario, head es el parens que abre:
    // Parens de la iteración es de cierre ? pop : push
    else if (currentParens === ")") {
      stack.pop();
    } else {
      stack.push(currentParens);
    }
  }

  return stack.getSize();
}

console.log("Test1 debe dar 1:", getMinParensToBeValid("())"));
console.log("Test2 debe dar 4:", getMinParensToBeValid("()))(("));
