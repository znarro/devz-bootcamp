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
    this.size = 0;
  }

  push(newData) {
    const newNode = new Node(newData);
    const currentHead = this.head;
    this.head = newNode;
    this.head.next = currentHead;
    this.size += 1;
  }
}

function returnKth(data, k) {
  const llist = new LinkedList();

  data.forEach((num) => llist.push(num));

  let kthNode = llist.head;
  if (k < llist.size) {
    for (let i = 0; i < k; i++) {
      kthNode = kthNode.next;
    }
    return kthNode.data;
  }
  return -1;
}

console.log("Test 1 dará 9:", returnKth([2, 3, 1, 4, 9, 10, 11], 2));
console.log("Test 2 dará 1:", returnKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log("Test 3 dará 5:", returnKth([2, 3, 5], 0));
console.log("Test 4 dará -1:", returnKth([3, 1], 2));
