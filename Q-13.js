// with function 

var arr = [1, 2, 3, 4, 5] 
const findTarget = (arr, target)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            return true
        }
    }
    return false
}

console.log(findTarget(arr, 5))