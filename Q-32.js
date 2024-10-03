// with function

function person(age){
    if(age<=13){
    console.log("Child")
}else if(age>=13 && age<=19){
    console.log("Teenager")
}else if(age>=20 && age<=59){
    console.log("Adult")
}else if(age>=60){
    console.log("Senior")
}
}
person(15)

// without function 

var age=15;

if(age<=13){
    console.log("Child")
}else if(age>=13 && age<=19){
    console.log("Teenager")
}else if(age>=20 && age<=59){
    console.log("Adult")
}else if(age>=60){
    console.log("Senior")
}