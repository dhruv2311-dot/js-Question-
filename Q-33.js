// with function 

function century(year){
    if(year%100 == 0){
        console.log("Century Year");
    }else{
        console.log("Not Century year");
    }
}
century(2024)

// without function 

var year=2000;

if(year%100 == 0){
    console.log("Century Year");
}else{
    console.log("not a Century year");
}