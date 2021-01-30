/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?
*/



// var removeNthFromEnd = function(head, n) {
    
//     let headNode = head;
//     let nodes = [];
//     while (headNode) {
//         // console.log(headNode)
//         nodes.push(headNode);
//         headNode = headNode.next;
//     }
//     nodes.push(headNode);
//     if (nodes.length === 1 && n === 1) {
//       return null;
//     }
//     const nIdx = nodes.length - n;
//     if (nIdx === 0) {
//       return nodes[1];
//     } else if (nIdx === nodes.length - 1) {
//       nodes[nodes.length - 2].next = null;
//     } else {
//       nodes[nIdx - 1].next = nodes[nIdx + 1];
//     }
//     return nodes[0]; 
// };

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
  
  var removeNthFromEnd = function(head, n) {
      
      let headNode = head;
      let nodes = [];
      while (headNode) {
          // console.log(headNode)
          nodes.push(headNode);
          headNode = headNode.next;
      }
  
     nodes.push(headNode);
     console.log(nodes)
      if (nodes.length === 1 && n === 1) {
        return null;
      }
      const nIdx = nodes.length - n;
      if (nIdx === 0) {
        return nodes[1];
      } else if (nIdx === nodes.length - 1) {
        nodes[nodes.length - 2].next = null;
      } else {
        nodes[nIdx - 1].next = nodes[nIdx + 1];
      }
      return nodes[0]; 
  };
  
  console.dir(removeNthFromEnd([1, 2, 3, 4, 5], 2))
  
  // let dumHead = new ListNode(1)
  // let secondNode = new ListNode(2)
  // dumHead.next = secondNode
  
  // let removeNthFromEnd = function(head, n) {
  
  //     let p = head, node = head
  //     while(n--){
  //         p = p.next
  //     }
  //     while(p && p.next ) {
  //         p = p.next
  //         node = node.next
  //     }
  //     if(!p)  head = head.next
  //     else node.next = node.next.next
  //     return head
  // };
  
  // var removeNthFromEnd = function(head, n) {
  //     if(!head) {
  //         return head;
  //     }
      
  //     let [near, far] = [head, head];
  //     while(n>0 && far) {
  //         far = far.next;
  //         n--;
  //     }
  //     if(n) {
  //         return head;
  //     }
  //     if(!far) {
  //         return head.next;
  //     }
  //     while(far.next) {
  //         far = far.next;
  //         near = near.next;
  //     }
      
  //     near.next = near.next.next;
  //     return head;
  // };
  