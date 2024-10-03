// with function 

function index(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==8){
            console.log(i);
        }
    }
}
index(arr=[5,7,7,8,8,10]);

// without function 

var arr=[5,7,7,8,8,10]

for(let i=0;i<arr.length;i++){
    if(arr[i]==8){
        console.log(i)
    }
}