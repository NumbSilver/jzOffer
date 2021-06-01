function binarySearch(arr,target){
    const length = arr.length;
    let l = 0 ,r = length-1;
    while(l<=r){
        let mid = Math.floor((l+r)/2);
        if(arr[mid]===target){
            return mid;
        }
        if(target>arr[mid]){
            l = mid+1;
        }else{
            r = mid-1;
        }

        return -1;
    }
}