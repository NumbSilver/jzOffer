function duplicates(arr) {
    var mapper = new Map();
    var res = [];
    for( let i of arr){
        mapper.set(i,(mapper.get(i)||0)+1);
        if(mapper.get(i)==2){
            res.push(i);
        }
    }
    return res;
}
console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]))