window.addEventListener('DOMContentLoaded', function() {
    "use strict";

    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    let hideTabContent = (a) => {
        for(let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    };

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

    let deadline = '2019-05-14';
    let getTimeRemaining = (endTime) => {
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

    let setClock = (id, endTime) => {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
        function updateClock() {
            let t = getTimeRemaining(endTime);
            if(t.hours < 10) {
                hours.textContent = `0${t.hours}`;
            } else if(t.minutes < 10) {
                minutes.textContent = `0${t.minutes}`;
            } else if(t.seconds < 10) {
                seconds.textContent = `0${t.seconds}`;
            }
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

   
    // Popup

    let more = document.querySelector('.more'),
        btns = document.querySelectorAll('.description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function showOrNone(display, cl, overflow) {
        overlay.style.display = display;
        this.classList.add(cl);
        document.body.style.overflow = overflow;
    };

    more.addEventListener('click', function() {
        showOrNone.call(more, 'block', 'more-splash', 'hidden');
    });

    close.addEventListener('click', function() {
        showOrNone.call(close, 'none', 'more-splash', 'visible');
    });

    btns.forEach((item) => {
        item.addEventListener('click', function() {
            showOrNone.call(item, 'block', 'more-splash', 'hidden');
        });
    });

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так'
    };

    let statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function submitForm(form) {
        let input = form.querySelectorAll('input');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.appendChild(statusMessage);
            let formData = new FormData(form);
    
            function postData(data) {
                return new Promise(function(resolve, reject) {
                    let request = new XMLHttpRequest();
                    request.open('POST', 'server.php');
                    request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
    
                    request.addEventListener('readystatechange', function() {
                        if(request.readyState < 4) {
                            resolve();
                        } else if(request.readyState === 4 && request.status === 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                    request.send(data);
                });
            }
            function clearInput() {
                for(let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            }
            let obj = {};
            formData.forEach((value, key) => {
                obj[key] = value;
            });
            let json = JSON.stringify(obj);
            postData(json)
                .then(() => statusMessage.textContent = message.loading)
                .then(() => {
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .then(clearInput)
        });
        function clearInput() {
            for(let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }
        clearInput();
        input.forEach(function(item) {
            item.addEventListener('input', function(e) {
                if(e.data.search(/[0-9\+]/)) {
                    this.value = '';
                } 
            });
        });
    
    }
    submitForm(document.querySelector('.main-form'));
    submitForm(document.querySelector('#form'));


    // slider


    let slideIndex = 1,
        slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

        showSlides(slideIndex);
        function showSlides(n) {

            if(n > slides.length) {
                slideIndex = 1;
            }
            if(n < 1) {
                slideIndex = slides.length;
            }

            slides.forEach((item) => item.style.display = 'none');

            dots.forEach((item) => item.classList.remove('dot-active'));

            slides[slideIndex - 1].style.display = 'block';

            dots[slideIndex - 1].classList.add('dot-active');
        }
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }
        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        prev.addEventListener('click', () => {
           plusSlides(-1); 
        });
        next.addEventListener('click', () => {
            plusSlides(1); 
         });

         dotsWrap.addEventListener('click', (e) => {
            for(let i = 0; i < dots.length + 1; i++) {
                if(event.target.classList.contains('dot') && event.target === dots[i - 1]) {
                    currentSlide(i);
                }
            }
         });

        

         // calc

         let persons = document.querySelectorAll('.counter-block-input')[0],
            restDays = document.querySelectorAll('.counter-block-input')[1],
            place = document.getElementById('select'),
            totalValue = document.getElementById('total'),
            personsSum = 0,
            daysSum = 0,
            total = 0;

            totalValue.textContent = '0';
        

            persons.addEventListener('change', function(e) {
                personsSum = +this.value;
                total = (daysSum + personsSum) * 4000;

                if(restDays.value === '') {
                    totalValue.textContent = '0';
                } else {
                    totalValue.textContent = total;
                }
            });

            restDays.addEventListener('change', function() {
                daysSum = +this.value;
                total = (daysSum + personsSum) * 4000;

                if(persons.value === '') {
                    totalValue.textContent = '0';
                } else {
                    totalValue.textContent = total;
                }
            });
            persons.addEventListener('input', function(e) {
                if(e.data.search(/[0-9]/)) {
                    this.value = '';
                } 
            });
            persons.addEventListener('blur', function(e) {
                if(this.value === '') {
                    totalValue.textContent = 'Заполните поле';
                } 
            });
            restDays.addEventListener('blur', function(e) {
                if(this.value === '') {
                    totalValue.textContent = 'Заполните поле';
                } 
            });
            restDays.addEventListener('input', function(e) {
                if(e.data.search(/[0-9]/)) {
                    this.value = '';
                } 
            });

            place.addEventListener('change', function() {
                if(restDays.value == '' || persons.value == '') {
                    totalValue.textContent = '0';
                } else {
                    let a = total;
                    totalValue.textContent = a * +this.options[this.selectedIndex].value;
                }
            });

        
        });
