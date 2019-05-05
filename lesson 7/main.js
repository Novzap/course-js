let div = document.querySelector('div');

let date = new Date();

function changeDate(date) {
    if(date < 10) {
        date = '0' + date;
        return date;
    } else {
        return date;
    }
}

div.textContent = changeDate(date.getHours()) + ':' + changeDate(date.getMinutes()) + ':' + changeDate(date.getSeconds());
