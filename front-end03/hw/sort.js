
let array = [];

for (let i = 0; i < 100; ++i) {
    array[i] = Math.floor(Math.random() * 100 + 1);
}

console.log(array.sort(function (f, s) {
    
    return f - s;

}));

