let str = "урок-3-был слишком легким";

str = str[0].toLocaleUpperCase() + str.slice(1);
str = str.replace(/-/g, ' ');
console.log(str);

 str = str.slice(-6).replace('им', 'оо');

console.log(str);

let arr = [20, 33, 1, "Человек", 2, 3];

arr.splice(3,1);
arr.forEach(function(item, i) {
    arr[i] = arr[i] ** 3; //jshint ignore:line
});
let result = arr.reduce(function(sum, current) {
    return (sum + current);//jshint ignore:line
}, 0);
result = Math.sqrt(result).toFixed();
console.log(result);

function func(arg) {
    if(typeof arg != 'string') {
        alert("Не строка");
    } else {
        arg = arg.trim();
        if(arg.length > 50) {
            arg = arg.slice(50) + '...';
            console.log(arg);
        }

    }
}

console.log(func('rsfgdgkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkdfgc'));