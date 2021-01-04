function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
} 


function buildReversedArrayLinkedList(array){
    if (array.length === 0) return null;
    
    const curNode = new ListNode();
    
    const largestIdx = array.pop();
    curNode.val = largestIdx;
    
    curNode.next = buildReversedArrayLinkedList(array)
    
    return curNode
    
}

// console.dir(buildReversedArrayLinkedList([3, 4, 2]))


var addTwoNumbers = function(l1, l2, carry) {
    
    const newListNode = new ListNode()
    
    let currentSum = (l1.val || 0) + (l2.val || 0) + (carry || 0)
    let carryOver = 0
    if(currentSum > 9){
        currentSum = currentSum % 10
        carryOver = 1
    }
    newListNode.val = currentSum
    
    if(l1.next || l2.next || carryOver){
        newListNode.next = addTwoNumbers(l1.next, l2.next, carryOver)
    }
    
    return newListNode  
    
}; 
const l1 = buildReversedArrayLinkedList([3, 4, 2])
const l2 = buildReversedArrayLinkedList([4, 6, 5])
console.dir(addTwoNumbers(l1, l2))
