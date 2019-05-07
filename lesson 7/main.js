let div = document.querySelector('div');


function getTimeRemaining() {
    let t = (Date.parse(new Date()) + ((new Date().getTimezoneOffset()) * 60 * 1000)),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
    return {
        'total': t,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}


function setClock(id) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
    function updateClock() {
        let t = getTimeRemaining();
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if(t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00',
            minutes.textContent = '00',
            seconds.textContent = '00';
        }
    }
}

setClock('timer');

function changeDate(date) {
    if(date < 10) {
        date = '0' + date;
        return date;
    } else {
        return date;
    }
}

div.textContent = changeDate(date.getHours()) + ':' + changeDate(date.getMinutes()) + ':' + changeDate(date.getSeconds());
