// with function 

function trafficsignal(color){
    if(color=="red"){
        console.log("Stop");
    }else if(color=="yellow"){
        console.log("Slow down")
    }else if(color=="green"){
        console.log("Go");
    }
}
trafficsignal("white");

// without function 

var color="white";
    if(color=="red"){
        console.log("Stop");
    }else if(color=="yellow"){
        console.log("Slow down")
    }else if(color=="green"){
        console.log("Go");
    }