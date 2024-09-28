// with function 

function a(arr){
    var Positive =0;
 var Negative=0;
 var negative = [];
 let positive = [];
 for(let i=0;i<arr.length;i++){
     if(arr[i]>0){
         Positive++;
         positive.push(arr[i]);
     }else if(arr[i]<0){
         Negative++;
         negative.push(arr[i])
     }
 }
     
         console.log(Positive);
         console.log(Negative);
 }
 a(arr=[1, -2, 3, -4, 5, -6])

// without function 

var arr=[1, -2, 3, -4, 5, -6]
var Positive =0;
var Negative=0;
var negative = [];

let positive = [];

for(let i=0;i<arr.length;i++){
    if(arr[i]>0){
          positive.push(arr[i]);
        Positive++;
    }else if(arr[i]<0){
        Negative++;
        negative.push(arr[i])
    }
}
console.log(Positive);
console.log(Negative); 
console.log(positive);
console.log(negative);