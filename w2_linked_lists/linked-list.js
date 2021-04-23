/* eslint-disable max-classes-per-file */

// Implementar un Linked list en JS:

class Node {
  constructor(data) {
    this.data = data;
    this.next = null; // El pointer inicia hacia null, hasta que se redirija
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head; // Head es el primer pointer de la Llist
  }
}

const llist = new LinkedList();
console.log("Head apunta a null:", llist.head);
// Head se redirige al primer node
llist.head = new Node(1);
console.log("Ahora head apunta al primer node:", llist.head.data);
console.log("Este primer node apunta hacia:", llist.head.next);
// Se añade un segundo node
const node2 = new Node(2);
// Enlazamos el primer node hacia el segundo
llist.head.next = node2;
console.log("Head ahora apunta hacia:", llist.head.next);
// Tercer node
const node3 = new Node(3);
node2.next = node3;
console.log("La lista completa:", JSON.stringify(llist, null, 4));
