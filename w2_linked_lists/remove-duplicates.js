/* eslint-disable max-classes-per-file */

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

    // If the list is empty
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    // If is not empty
    let tail = this.head;
    // While the node is not the last
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
  }

  removeDuplicates() {
    const setOfData = new Set();

    let prevNode = null;
    let currentNode = this.head;

    while (currentNode) {
      // If is duplicate
      if (setOfData.has(currentNode.data)) {
        prevNode.next = currentNode.next;
        // Only update the current node
        currentNode = currentNode.next;
      } else {
        setOfData.add(currentNode.data);
        // Update the current node AND the previous one
        [prevNode, currentNode] = [currentNode, currentNode.next];
      }
    }
  }
}

// Test 1
const data1 = [4, 5, 9, 0, 5, 1, 2];

const llist1 = new LinkedList();

data1.forEach((item) => llist1.push(item));

console.log("Initial state:", JSON.stringify(llist1, null, 4));
llist1.removeDuplicates();
console.log("Without duplicates:", JSON.stringify(llist1, null, 4));

// Test 2
const data2 = [1, 2, 3, 3, 2, 1];

const llist2 = new LinkedList();

data2.forEach((item) => llist2.push(item));

console.log("Initial state:", JSON.stringify(llist2, null, 4));
llist2.removeDuplicates();
console.log("Without duplicates:", JSON.stringify(llist2, null, 4));

// Test 3
const data3 = [1, 1, 1, 1, 1];

const llist3 = new LinkedList();

data3.forEach((item) => llist3.push(item));

console.log("Initial state:", JSON.stringify(llist3, null, 4));
llist3.removeDuplicates();
console.log("Without duplicates:", JSON.stringify(llist3, null, 4));
