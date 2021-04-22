function IsPopOrder(pushV, popV)
{
    if(pushV.length === 0 || popV.length === 0){
        return;
    }
    var temp = [];
    var popIndex = 0;
    for(var i=0;i<pushV.length;i++){
        temp.unshift(pushV[i]);
        console.log(temp)
        while(temp.length && temp[0] === popV[popIndex]){
            temp.shift();
            popIndex++;
        }
    }
    return (temp.length === 0);
}
console.log(IsPopOrder([1,2,3,4,5],[4,3,5,1,2]))