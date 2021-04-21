// 把基数放到前面 把偶数放到后面
function reOrderArray( arr ) {
    // write code here
    // 用冒泡排序的思想
    for(let i = 0;i < arr.length - 1;i++){
        for(let j = 0;j < arr.length - 1 - i;j++){
            if(arr[j] % 2 ==0 && arr[j+1] % 2 == 1){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
        console.log(arr);
    }
    return arr;

}
reOrderArray([2,2,1,3,4,5])