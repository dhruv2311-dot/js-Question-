// with function 

function arr(start,stop){
    let array=[];
    
    for(let i=start;i<=stop;i++){
        array.push(i);
    }
    console.log(array)
}
arr(1,5);

// without function 

let start = 25;
let stop = 74;
let arr = [];

for(let i=start; i<=stop; i++){
    arr.push(i);
}

console.log(arr);