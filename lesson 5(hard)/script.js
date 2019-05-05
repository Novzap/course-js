
let div = document.createElement('div');
let one = document.createElement('input');
let two = document.createElement('input');
let result = document.createElement('input');
result.setAttribute('readonly', true);
document.body.appendChild(result);
let btn = document.createElement('button');
btn.textContent = 'Найти разницу';
document.body.appendChild(btn);
function createInput(name, id, placeholder, placeholderValue, cssStyle) {
    name.setAttribute(placeholder , placeholderValue);
    name.id = id;
    name.style.cssText = cssStyle;
    document.body.insertBefore(name, result);
}

createInput(one, 'one', 'placeholder', 'Введите дату в формате YYYY-MM-DD', 'width: 100%; margin-top: 10px');
createInput(two, 'two', 'placeholder', 'Введите дату в формате YYYY-MM-DD', 'width: 100%; margin-top: 10px');


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

div.style.cssText = "border: 2px solid black; padding: 10px;";
div.textContent = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '   ' + changeDate(day) + '.' + changeDate(month) + '.' + date.getFullYear();
document.body.insertBefore(div, one);
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
