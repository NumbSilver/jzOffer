// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
// 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
// NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
function minNumberInRotateArray(rotateArray)
{
    // write code here
    let len = rotateArray.length;
    if(len==0) return 0;
    if(rotateArray[0]<rotateArray[len-1]) return rotateArray[0];
    else{
        let x = 0;
        while(rotateArray[x]<=rotateArray[x+1]&&x!=len-1){
            x++;
        }
        return rotateArray[x+1];
    }
}
console.log(minNumberInRotateArray([1,1,1,1,2,3,4]))