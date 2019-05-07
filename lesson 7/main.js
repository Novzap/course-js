function getTimeRemaining() {
    let t = new Date(),
        seconds = t.getSeconds(),
        minutes = t.getMinutes(),
        hours = t.getHours();
        console.log(hours);
        console.log(t);
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
        seconds = timer.querySelector('.seconds');
        setInterval(updateClock, 1000);
    function updateClock() {
        let t = getTimeRemaining();
        checkTime(hours, t.hours);
        checkTime(minutes, t.minutes);
        checkTime(seconds, t.seconds);
        
    }
}
function checkTime(t, point) {
    if(point < 10) {
        t.textContent = '0' + point;
    } else {
        t.textContent = point;
    }
}

setClock('timer');
