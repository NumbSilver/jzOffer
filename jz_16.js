// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // write code here
    if(!pHead1&&!pHead2) return null;
    let dummyNode = new ListNode(-1);
    var pre = dummyNode;
    while(pHead1&&pHead2){
        if(pHead1.val<pHead2.val){
            let curr = pHead1;
            pre.next = curr;
            pHead1 = pHead1.next;
            pre = pre.next;
        }else{
            let curr = pHead2;
            pre.next = curr;
            pHead2 = pHead2.next;
            pre = pre.next;
        }
    }
    if(pHead1){
        pre.next = pHead1;
    }
    if(pHead2){
        pre.next = pHead2;
    }
    return dummyNode.next;
}