let div = document.querySelector('div');
let one = document.querySelector('#one');
let two = document.querySelector('#two');
let result = document.querySelector('#res');
let btn = document.querySelector('button');

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;

function changeDate(date) {
    if(date < 10) {
        date = '0' + date;
        return date;
    } else {
        return date;
    }
}

function getDay() {
    let options = {
        weekday: 'long',
    };
    return date.toLocaleString("ru", options);   
}
console.log(getDay());

div.textContent = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '   ' + changeDate(day) + '.' + changeDate(month) + '.' + date.getFullYear();

btn.addEventListener('click', function() {
    let res;
    let dateInput1 = new Date(Date.parse(one.value)).getDate();
    let dateInput2 = new Date(Date.parse(two.value)).getDate();
    if(dateInput1 >= dateInput2) {
        res = dateInput1 - dateInput2;
    } else if(dateInput2 - dateInput1) {
        res = dateInput2 - dateInput1;
    } else {
        res = 'Ошибка';
    }
    console.log(res);
    result.value = res;

});
