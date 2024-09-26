// with function 

function arrpositive(arr){
    
    var positive=true;
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<=0){
            positive=false;
            break;
        }
    }
    console.log(positive);
}
arrpositive(arr=[3,5,9,1,-7]);

// without function 

var arr = [3, 5, 9, 1, 7]
var arrpositive=true;

for(let i=0;i<arr.length;i++){
    if(arr[i]<=0){
        arrpositive=false;
        break;
    }
}console.log(arrpositive);