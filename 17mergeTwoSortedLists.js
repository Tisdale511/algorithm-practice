/*
Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
*/





/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


 // **NEEDS LINKEDLIST BUILDER TO WORK IN VSC

 var mergeTwoLists = function(l1, l2) {
    if(!l1 && !l2) return null
    let head1 = l1, head2 = l2;
    let curNode = singleHead = new ListNode();
    
    while(head1 || head2){
        if(!head1){
            curNode.val = head2.val;
            head2 = head2.next;
            if(head2){
                curNode = curNode.next = new ListNode();
            }    
            continue
        }
        if(!head2){
            curNode.val = head1.val;
            head1 = head1.next;
            if(head1){
                curNode = curNode.next = new ListNode();
            }
            continue
        }
        if(head1.val <= head2.val){
            curNode.val = head1.val;
            head1 = head1.next;
        }else{
            curNode.val = head2.val;
            head2 = head2.next;
        }
        curNode = curNode.next = new ListNode();
    }     
    
    return singleHead
};