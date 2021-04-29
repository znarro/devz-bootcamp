/* eslint-disable max-classes-per-file */

class Node {
  constructor(data = null) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(newData) {
    const newNode = new Node(newData);
    this.size += 1;
    // Si la queue está vacía, head y tail serán el mismo primer node
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
      return;
    }
    // Si no, identifico tail, inserto node en su next pointer, y actualizo tail
    const currentTail = this.tail;
    this.tail = newNode;
    currentTail.next = this.tail;
  }

  pop() {
    const currentHead = this.head;
    // Si la queue tiene al menos un node
    if (currentHead) {
      this.head = currentHead.next;
      this.size -= 1;
      // Si ya no quedan elementos en la queue, tail y head deben ser null
      if (!this.head) {
        this.tail = this.head;
      }
    }
  }

  peek() {
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

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log("Push test:", JSON.stringify(queue, null, 4));
queue.pop();
console.log("Pop test:", JSON.stringify(queue, null, 4));
console.log("Peek test:", queue.peek());
console.log("Peek test:", JSON.stringify(queue, null, 4));
console.log("IsEmpty test (not empty):", queue.isEmpty());
console.log(JSON.stringify(queue, null, 4));
queue.pop();
queue.pop();
console.log("IsEmpty test (empty):", queue.isEmpty());
console.log(JSON.stringify(queue, null, 4));
