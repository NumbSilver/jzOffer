// 用两个栈来实现一个队列，完成队列的Push和Pop操作。 队列中的元素为int类型。
// 一个栈用来入栈，另一个用来倒序保存，只要instack不空，就一直push进outStack

var inStack = [];
var outStack = [];
function push(node)
{
    // write code here
    inStack.push(node);
}
function pop()
{
    // write code here
    if(outStack.length!=0) return  outStack.pop();
    else{
        while(inStack.length!=0){
            outStack.push(inStack.pop());
        }if(outStack.length!=0){
            return outStack.pop();
        }else{
            return -1;
        }
    }
}