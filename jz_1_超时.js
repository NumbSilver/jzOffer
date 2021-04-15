// 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
// 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
// 判断数组中是否含有该整数。

function Find(target, array)
{
    // write code here
    var d = [[1,0],[0,1]];
    var visited = new Array(array.length);
    for(let i = 0;i<array.length;i++){
        visited[i]=new Array(array[0].length).fill(0);
    }
    search(0,0);
    // console.log(visited)
    return search(0,0);

    function search(x, y){
        visited[x][y]++;
        if(array[x][y]==target){
            return true;
        }
        for(let i =0;i<2;i++){
            let newX = x+d[i][0];
            let newY = y+d[i][1];
            if(inArea(newX,newY)&&array[newX][newY]>target&&visited[x][y]>=2){
                return false;
            }
            if(inArea(newX,newY)&&search(newX,newY)){
                return true;
            }
        }
        return false;
    }
    function inArea(x,y){
        return x<array.length&&y<array[0].length;
    }
}
console.log(Find(3,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]))