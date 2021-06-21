

function functionFunction(str) {
    // arguements：{0：Hello}
    return function(x){
        // arguments:{0：world}
        return str+', '+x
    }
}
console.log(functionFunction('Hello')('world'))