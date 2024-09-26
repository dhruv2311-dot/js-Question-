// use function 

function triangle(a,b,c){
    if(a==b && b==c && c==a){
    console.log("equilateral");
}else if(a!=b && b==c && c!=a){
    console.log("isosceles");
}else if(a!=b && b!=c && c==a){
    console.log("isosceles");
}else if(a==b && b!=c && c!=a){
    console.log("isosceles");
}else if(a!=b && b!=c && c!=a){
    console.log("scalene");
}
}
triangle(3,3,3);


// without function 

var a=5;
var b=4;
var c=3;
if(a==b && b==c && c==a){
    console.log("equilateral");
}else if(a!=b && b==c && c!=a){
    console.log("isosceles");
}else if(a!=b && b!=c && c==a){
    console.log("isosceles");
}else if(a==b && b!=c && c!=a){
    console.log("isosceles");
}else if(a!=b && b!=c && c!=a){
    console.log("scalene");
}