const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.rootNode = null;
    }

    getUnderlyingList() {
        return this.rootNode;
    }

    enqueue(value) {
        if (this.rootNode === null) {
            this.rootNode = new ListNode(value);
            return;
        }
        let node = this.rootNode;
        while (node.next !== null) { node = node.next; }
        node.next = new ListNode(value);
    }

    dequeue() {
        let topEl = this.rootNode.value;
        this.rootNode = this.rootNode.next;
        return topEl;
    }
}

module.exports = {
    Queue
};

const queue = new Queue();
queue.enqueue(8);
queue.enqueue(7);
queue.enqueue(6);


console.log(queue.dequeue());
console.log(queue.dequeue());



console.log(queue);