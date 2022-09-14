/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, 
and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
//const [t1, t2] = [[2, 4, 3], [5, 6, 4]]

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
    let ans = new ListNode(0);
    let ansNext = ans;
    let carry = 0;
    let a = (l1fn, l2fn, ansNext) => {
        if(l1fn === null && l2fn === null) return ans.next
        
        sum = (l1fn ? l1fn.val : 0) + (l2fn ? l2fn.val : 0) + carry;
        console.log(ansNext, sum)
        carry = sum > 9 ? 1 : 0;
        // ansNext.next = new ListNode(sum > 9 ? sum % 10 : sum);
        ansNext.next = sum > 9 ? new ListNode(sum % 10) : new ListNode(sum);
        return a(l1fn ? l1fn.next : null, l2fn ? l2fn.next : null, ansNext.next);
    }
    return a(l1, l2, ansNext)
};

//addTwoNumbers(l1, l2)

/*LeetCode解
var addTwoNumbers = function(l1, l2) {
    let pre = new ListNode(-1)
    let prePoint  = pre
    let count = 0
    let sum  = 0
    while(l1||l2){
        if(l1&&l2){
            sum = l1.val+l2.val+count   
            l1 = l1.next
            l2 = l2.next            
        }else{
            sum = l1?l1.val+count:l2.val+count
            if(l1){
                l1 = l1.next
            }else{
                l2 = l2.next
            }
        }
        count = 0
            if(sum>=10){
                sum = sum%10
                count++
            }
        prePoint.next  = new ListNode(sum)
        prePoint = prePoint.next
        
    }
    if(count){
        prePoint.next = new ListNode(1)
        prePoint = prePoint.next
    }
    return pre.next
};
*/
