// 链表倒序输出

// 方法一：借助新链表
function ReverseList(pHead)
{
    // write code here
    var dummyNode = new ListNode(-1);
    dummyNode.next = null;

    var post = dummyNode.next;
    while(pHead){
        var s = pHead;
        dummyNode.next = s;
        pHead = pHead.next;
        s.next = post;
        post = s;
    }
    return dummyNode.next
}

function ReverseList(pHead)
{
    // 在一个数组中完成循环
    let pre = null;
    while(pHead){
        let curr = pHead;
        pHead = pHead.next;
        curr.next = pre;
        pre = curr;
    }
    return pre;
}