//我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
// 答案还是给的递归，我依然觉得这个是一个动态规划
function rectCover(number)
{
    // write code here
    var memo = new Array(number+1);
    memo[0]=0;
    memo[1]=1;
    memo[2]=2;
    for(var i = 3;i<number+1;i++){
        memo[i]=memo[i-1]+memo[i-2];
    }
    return memo[number];
}