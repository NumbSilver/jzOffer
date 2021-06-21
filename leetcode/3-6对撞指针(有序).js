// leetcode 167
// 给定一个已按照 升序排列  的整数数组 numbers ，
// 从数组中找出两个数满足相加之和等于目标数 target 。
function collisionPointer(numbers,target){
    let left = 0, right = numbers.length-1;
    // const res = [];
    while(left<right){
        if(numbers[left]+numbers[right]===target) return [left+1,right+1]
        if(numbers[left]+numbers[right]<target) left++;
        else right--;
    }
    return -1;
}
