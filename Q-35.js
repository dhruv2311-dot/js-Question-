// with function 

function tri(n){
    for(let i=n;i>=1;i--){
        let row="";
        for(j=1;j<=i;j++){
            row += "* ";
        }
        console.log(row);
    }
}
tri(5)

// without function 

var n=5;

for (let i = n; i >= 1; i--) {
    let row = "";
        for (let j = 1; j <= i; j++) {
            row =row+ '* ';
        }
        console.log(row);
    }
