// 输入一个链表，输出该链表中倒数第k个结点。
// 如果该链表长度小于k，请返回空。
// 快慢指针
function FindKthToTail( pHead ,  k ) {
    var f = pHead;
    for(let i = 0;i<k;i++){
        if(f){
            f = f.next;
        }
        else{
            return null;
        }

    }
    var s  = pHead;
    while(f){
        s = s.next;
        f = f.next;
    }
    // write code here
    return s;
}