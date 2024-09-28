// with function 

function ascendingorder(arr){
    for(i=0;i<arr.length;i++){
        if(arr[i]>arr[i+1]){
            console.log("false");
            break;
        }
        if(i==arr.length-1){
            console.log("true");
        }
    }
    }
    ascendingorder(arr = [1, 2, 3, 8, 5])

// without function 

var arr = [1, 2, 3, 4, 5]
for(i=0;i<arr.length;i++){
    if(arr[i]>arr[i+1]){
        console.log("false");
        break;
    }
    if(i==arr.length-1){
        console.log("true");
    }
}