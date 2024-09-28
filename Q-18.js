// with function 

function even(arr){
    for(let i=0;i<arr.length;i=i+2){
        console.log(arr[i]);
    }
}
even(arr=[10,20,30,40,50]);

// without function 

var arr=[10,20,30,40,50]
for(let i=0;i<arr.length;i=i+2){
    console.log(arr[i]);
    
}