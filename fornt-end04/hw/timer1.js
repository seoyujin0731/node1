
let count = 1;

let a = setInterval(() => {
    if(count == 10)
        clearInterval(a);
        console.log(count ++, new Date());
}, 1000);