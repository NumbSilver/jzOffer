function doublePointer(nums,val){
    // 移除nums中的valength,返回新数组的长度
    // i是慢指针 j是快指针
    let i =0;
    for(let j = 0;j<nums.length;j++){
        if(nums[j]!==val){
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
}