// with function 

function input(str){
    var length=0;
    for(let i=0;i<str.length;i++){
        length++;
    }
    console.log(length);
}
input(str="prem");


// without function 

let str = "Prem";
let length = 0;
for (let i = 0; i < str.length; i++) {
    length++;
}
console.log(length);
