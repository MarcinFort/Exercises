// My attempt at the HackerRank "Insert a Node at the Tail of a Linked List" challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/insert-a-node-at-the-tail-of-a-linked-list



/*
  Node is defined as
  var Node = function(data) {
      this.data = data;
      this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data) {
    
    var newNode = {
        data: data,
        next: null
    }
    
    if (!head) {
       return newNode;
    }
    
    var currentHead = head;
    
    while(currentHead.next) {
        currentHead = currentHead.next;
    } 
    
    currentHead.next = newNode;
    
    return head;
}
