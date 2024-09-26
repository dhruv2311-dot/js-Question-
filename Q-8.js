// with function 

function average(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
    sum = sum + arr[i];
}
console.log(sum / arr.length);
}
average(arr=[1,2,3,4,5]);

// without function 

var arr=[1,2,3,4,5]
let sum = 0
for(let i=0; i<arr.length; i++){
    sum+=arr[i]
}
console.log(sum/arr.length);
