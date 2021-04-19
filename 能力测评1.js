function removeWithoutCopy(arr, item) {
    let s = 0,f = 0;
    while(f<arr.length){
        if(arr[f]!=item) {
            s++;
            f++;
        }
        while(arr[f]==item){
            f++;
        }
        arr[s]=arr[f];

    }
    arr.length = s;
    return arr;
}
console.log(removeWithoutCopy([1,2,2,3,4],2))