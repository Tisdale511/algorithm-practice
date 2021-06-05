var reverseList = function(head) {
    if (!head) return null;
    let prev = null;
    let curr = head;
    let next = curr.next;
    while (curr) {
        curr.next = prev;
        prev = curr;
        curr = next;
        if (next) next = next.next;
      }
      
  };