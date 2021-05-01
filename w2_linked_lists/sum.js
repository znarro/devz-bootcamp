/* eslint-disable max-classes-per-file */

// Tienes dos números representados por dos linked lists donde el valor de cada nodo representa un dígito. Los dígitos están guardados de manera inversa, de manera que las unidades está en el primer nodo (head), las decenas en el segundo nodo, etc.
// Escribe un programa que dado dos linked lists, sume los dos números que representan y regrese esa suma representada también en un linked list.

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
    this.size += 1;

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

  getSize() {
    return this.size;
  }
}

function getNumberFromList(list) {
  let num = "";
  let currentDigit = list.head;
  for (let i = 0; i < list.getSize(); i++) {
    num += currentDigit.data.toString();
    currentDigit = currentDigit.next;
  }

  return Number(num);
}

function sumLinkedLists(llist1, llist2) {
  const num1 = getNumberFromList(llist1);
  const num2 = getNumberFromList(llist2);
  const sum = (num1 + num2).toString();
  const resultList = new LinkedList();

  for (let i = 0; i < sum.length; i++) {
    resultList.push(Number(sum[i]));
  }

  console.log("Sum list:", JSON.stringify(resultList, null, 4));
  return resultList;
}

// Test 1

const firstNumA = new LinkedList();
firstNumA.push(1);
firstNumA.push(3);
firstNumA.push(2);
const secondNumA = new LinkedList();
secondNumA.push(3);
secondNumA.push(0);
secondNumA.push(6);

sumLinkedLists(firstNumA, secondNumA);

// Test 2

const firstNumB = new LinkedList();
firstNumB.push(9);
firstNumB.push(9);
firstNumB.push(9);
const secondNumB = new LinkedList();
secondNumB.push(1);

sumLinkedLists(firstNumB, secondNumB);
