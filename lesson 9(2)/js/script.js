window.addEventListener('DOMContentLoaded', function() {
    "use strict";

    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(e) {
        let target = e.target;
        if (target && target.matches('div.info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

    // Timer

    let deadline = '2019-05-06';
    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - (Date.parse(new Date()) + ((new Date().getTimezoneOffset()) * 60 * 1000)),
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

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock() {
            let t = getTimeRemaining(endTime);
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

    setClock('timer', deadline);

    // Прокрутка

    // let menuElem = document.querySelectorAll('.container ul li');
    // let blockInfo = document.querySelector('.info');
    // let pos = 0;

    // function scroll() {
    //             let id = requestAnimationFrame(scroll);
    //             pos = pos + 10;
    //             document.documentElement.scrollTop = pos;
    //             if(pos == blockInfo.offsetTop) {
    //                 cancelAnimationFrame(id);
    //                 pos = 0;
    //             }
    //             console.log(pos);
    // }
    // menuElem[0].addEventListener('click', function(e) {
    //     requestAnimationFrame(scroll);

    // });

    // Popup

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');


    more.addEventListener('click', function() {
        overlay.style.display = 'block';
        this.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = 'visible';
    });
});
