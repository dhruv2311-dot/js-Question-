// with function 

function difrence(arr){
    arr.sort();
    console.log(arr);
    console.log(arr.length);
    console.log(arr[4]-arr[0]);
}
difrence(arr=[80,30,70,50,20]);

// without function 

var arr = [80, 30, 70, 50, 20]
arr.sort();
console.log(arr);
console.log(arr.length)
console.log(arr[4]-arr[0]);