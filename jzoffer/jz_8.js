// 跳台阶
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）
// 思路一：递归，递归的话重复数据计算次数较多
// 思路二：动态规划+记忆数组 这个方法更适合这道题 但是剑指给的分类是递归，我认为应该是动态规划

function jumpFloor(number)
{
    // write code here
//     动态规划
    var memo = new Array(number+1);
    memo[0]=0;
    memo[1]=1;
    memo[2]=2;
    for(var i =3;i<number+1;i++){
        memo[i]=memo[i-1]+memo[i-2];
    }
    return memo[number];
}