// function makeClosures(arr, fn) {
//     var result = [];
//     for(var i = 0;i<arr.length;i++){
//         result[i] = function(){
//             return fn(arr[i])
//         };
//     }
//     return result;
// }

function makeClosures(arr, fn) {
    var funArr = [];
    for (let i =0; i<arr.length; i++) {
        funArr[i] = function() {
            return fn(arr[i]);
        };
    }

    return funArr;
}

console.log(makeClosures([1, 2, 3], function (x) {
    return x * x;
})[1](1))