
let Stack = [];
function push(node)
{
    // write code here
    Stack.push(node);

}
function pop()
{
    // write code here
    return Stack.pop();
}
function top()
{
    // write code here
    return Stack[0];
}
function min()
{
    // write code here
    let min = Stack[0];
    for(let i = 0 ;i<Stack.length;i++){
        if(Stack[i]<min){
            min = Stack[i]
        }
    }
    return min;
}