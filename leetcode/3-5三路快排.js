function threeQuickSort(arr,L=0,R=arr.length-1){
    //适用于大量重复的情况
    if(L<R){
        let p = partition(arr,L,R);
        threeQuickSort(arr,L,p[0]-1);
        threeQuickSort(arr,p[1]+1,R);
        return arr;
    }
    
     
}

function partition(arr,L,R){
    // 用arr[R]做key,设置一个less一个more
    // arr[L...less-1]中的元素都小于key
    // arr[more+1..R]中的元素都大于key
    let less = L-1;
    let more = R+1;
    let idx = L;
    for(;idx<more;){
        if(arr[idx]<arr[R]){
            // less直接++，idx交换之后再++
            [arr[++less],arr[idx++]]=[arr[idx++],arr[++less]];
        }else if(arr[idx]>arr[R]){
            [arr[--more],arr[idx]]=[arr[idx],arr[--more]];
        }else{
            idx++;
        }
    }
    return [less+1,more-1]
}