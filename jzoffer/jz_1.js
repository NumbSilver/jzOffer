// 从右上角开始寻找
function Find(target, array)
{
    let col =array[0].length-1;
    let row=array.length-1;
    let i=0;
    let j=col;
    while(i<=row&&j>=0)
    {
        if(array[i][j]==target)
        {
            return true;
        }
        if(array[i][j]>target)
        {
            j--;
        }
        if(array[i][j]<target)
        {
            i++;
        }
    }
    return false

}