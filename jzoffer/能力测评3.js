function argsAsArray(fn, arr) {
    console.log(fn.call(this,...arr))
    return fn(arr);
}
console.log(argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!']))