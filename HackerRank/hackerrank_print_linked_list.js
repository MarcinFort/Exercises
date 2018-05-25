// My attempt at the HackerRank "Print the Elements of a Linked List" challenge
// https://www.hackerrank.com/contests/chingu-challenge-9-javascript-prep/challenges/print-the-elements-of-a-linked-list 



/* Node is defined as
var Node = function(data) {
    this.data = data;
    this.next = null;
}
*/
// This is a "method-only" submission.
// You only need to complete this method.

function print(head) {  
        
    if (head !== null) {
         while(true) {
            console.log(head.data);
            if (head.next !== null) {
                head = head.next;
            } else {
                break;
            }
        }    
    }
}

