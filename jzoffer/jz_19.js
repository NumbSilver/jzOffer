function printMatrix(matrix)
{
    // write code here
    var res = [];
    var m = matrix.length-1;
    var n = matrix[0].length-1;
    var i = 0;
    while(i<=Math.ceil(Math.min(m,n)/2)){

        for(let j = i;j<=n-i;j++){
            res.push(matrix[i][j]);
        }
        if((m+1)*(n+1)<=res.length){
            break;
        }
        for(let j = i+1;j<=m-i;j++){
            res.push(matrix[j][n-i]);
        }
        if((m+1)*(n+1)<=res.length){
            break;
        }
        for(let j = n-i-1;j>=i;j--){
            res.push(matrix[m-i][j]);
        }
        if((m+1)*(n+1)<=res.length){
            break;
        }
        for(let j = m-1-i;j>=i+1;j--){
            res.push(matrix[j][i]);
        }
        if((m+1)*(n+1)<=res.length){
            break;
        }


        if((m+1)*(n+1)<=res.length){
            break;
        }
        i++
    }
    return res;
}
console.log(printMatrix([[1],[2],[3],[4],[5]]))