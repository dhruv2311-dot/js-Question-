// with function 

function Pyramid(n){
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i);
        let stars = '* '.repeat(i);
        console.log(spaces + stars);
    }
}
Pyramid(5);