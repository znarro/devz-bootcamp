/* eslint-disable max-classes-per-file */

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

    const currentTop = this.head;
    // Siempre el nuevo item va a ser head
    this.head = newNode;
    this.size += 1;
    // Y solo muevo el next pointer de head cuando la lista no está vacía
    if (this.head !== currentTop) {
      this.head.next = currentTop;
    }
  }

  pop() {
    const currentTop = this.head;
    // Si stack no está vacío, muevo head
    if (currentTop) {
      this.head = currentTop.next;
      this.size -= 1;
    }
  }

  peek() {
    // Si stack no está vacío, retorno data del head
    if (this.head) {
      return this.head.data;
    }
    return null;
  }

  isEmpty() {
    const isNotEmpty = !!this.peek();
    return !isNotEmpty;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Push test:", JSON.stringify(stack, null, 4));
stack.pop();
console.log("Pop test:", JSON.stringify(stack, null, 4));
console.log(stack.peek());
console.log("Peek test (didn't change stack):", JSON.stringify(stack, null, 4));
console.log("IsEmpty test (not empty):", JSON.stringify(stack, null, 4));
console.log(stack.isEmpty());
stack.pop();
stack.pop();
console.log("IsEmpty test (empty):", JSON.stringify(stack, null, 4));
console.log(stack.isEmpty());
