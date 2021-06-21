arr = arr.flat(Infinity);

arr = [].concat(...arr);

arr = arr.join(',').split(',');

function flat(arr){
    return arr.toString().split(',').map(function(item){
        return Number(item);
    }
    )
}

function flat(arr){
    return arr.join(',').split(',').map(function(item){
        return parseInt(item);
    }
    )
}