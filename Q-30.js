// with function 

function sum(arr){
    var evensum=0;
    var oddsum=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            evensum=evensum+arr[i];
        }else{
            oddsum=oddsum+arr[i];
        }
    }
    console.log(evensum)
    console.log(oddsum)
}
sum(arr=[1,3,2,4,5,6])

// without function 

var arr=[1,3,2,4,5,6]
var evensum=0;
var oddsum=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        evensum=evensum+arr[i];
    }else {
        oddsum=oddsum+arr[i];
    }
}
console.log(evensum)
console.log(oddsum)