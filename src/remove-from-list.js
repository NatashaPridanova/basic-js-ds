const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {

    let prevNode;
    let curNode = l;
    let nextNode;


    if (curNode.value === k) {
        return removeKFromList(l.next, k);
    }

    while (curNode.next !== null) {
        prevNode = curNode;
        curNode = curNode.next;
        nextNode = curNode.next;

        if (curNode.value === k) {
            while (curNode.value === k) {
                prevNode.next = nextNode;
                if (prevNode.next !== null) {
                    curNode = nextNode;
                    nextNode = curNode.next;
                } else { return l; }

            }

        }

    }

    return l;
}

module.exports = {
    removeKFromList
};
let list = {
    'next': {
        'next': {
            'next': null,
            'value': 3,
        },
        'value': 2,
    },
    'value': 1,
}
let k = 3;
//removeKFromList(list, k);