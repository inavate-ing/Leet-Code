/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Reverse a singly linked list.
 * @param head
 * @returns {null}
 */
const reverseList = function (head) {
    let [prev, current] = [null, head]
    while (current) {
        [current.next, prev, current] = [prev, current, current.next]
    }
    return prev
};