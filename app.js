function linearSeasrh(arr , target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == target)return i;
    }
    return -1;
}

// if arr is sorted, we can look for values much more quickly.
function binarySeasrch(arr, val){
 let leftIdx = 0;
 let rightIdx = arr.length - 1;
 while(leftIdx <= rightIdx){
    let middleIdx = Math.floor((leftIdx + rightIdx)/2);
    let middleVal = arr[middleIdx];
    if(middleVal < val){
        leftIdx = middleIdx + 1;
    } else if (middleVal > val){
        rightIdx = middleIdx - 1;
    } else{
        return middleIdx;
    }
    } return -1;
}