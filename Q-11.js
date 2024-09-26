// with function 

function duplicate(arr){
    let empty = [];
    
    for(let i=0; i<arr.length; i++){
    if(!empty.includes(arr[i])){
        empty.push(arr[i])
    }
}
console.log(empty);
}
duplicate(arr=[1,2,3,3,4,5,4]);

// without function 

var arr=[1, 2, 2, 3, 4, 4, 5]
let empty = [];

for(let i=0; i<arr.length; i++){
    if(!empty.includes(arr[i])){
        empty.push(arr[i])
    }
}
console.log(empty);