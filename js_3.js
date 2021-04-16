// 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
function ListNode(x){
    this.val = x;
    this.next = null;
}
function printListFromTailToHead(head)
{
    // write code here
//     var dummyNode = new ListNode(-1);
//     dummyNode.next = null;
    var ArrayList = [];
    while(head){
        ArrayList.push(head.val);
        head = head.next;
    }
    return ArrayList.reverse();
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};
// 测试用例：手动实现一个链表
var dummyNode = new ListNode(-1);
var pre = dummyNode;
dummyNode.next = null;
var arr = [67,0,24,58]
for(let i of arr){
    var current = new ListNode(i);
    current.next = pre.next;
    pre.next = current;
    pre = pre.next;
}
// console.log(dummyNode.next)
console.log(printListFromTailToHead(dummyNode.next))