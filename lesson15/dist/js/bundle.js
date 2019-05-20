/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/calc.js":
/*!******************************!*\
  !*** ./src/js/parts/calc.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
  var persons = document.querySelectorAll('.counter-block-input')[0],
      restDays = document.querySelectorAll('.counter-block-input')[1],
      place = document.getElementById('select'),
      totalValue = document.getElementById('total'),
      personsSum = 0,
      daysSum = 0,
      total = 0,
      baseCoef = 1;
  totalValue.textContent = '0';
  persons.addEventListener('input', function (e) {
    if (e.data.search(/[0-9]/)) {
      this.value = '';
    }

    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000 * baseCoef;

    if (restDays.value === '') {
      totalValue.textContent = '0';
    } else {
      totalValue.textContent = total;
    }
  });
  restDays.addEventListener('input', function (e) {
    if (e.data.search(/[0-9]/)) {
      this.value = '';
    }

    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000 * baseCoef;

    if (persons.value === '') {
      totalValue.textContent = '0';
    } else {
      totalValue.textContent = total;
    }
  });
  persons.addEventListener('blur', function (e) {
    if (this.value === '') {
      totalValue.textContent = 'Заполните поле';
    }
  });
  restDays.addEventListener('blur', function (e) {
    if (this.value === '') {
      totalValue.textContent = 'Заполните поле';
    }
  });
  place.addEventListener('input', function () {
    if (restDays.value == '' || persons.value == '') {
      totalValue.textContent = '0';
    } else {
      baseCoef = +this.options[this.selectedIndex].value;
      totalValue.textContent = (daysSum + personsSum) * 4000 * baseCoef;
    }
  });
}

module.exports = calc;

/***/ }),

/***/ "./src/js/parts/form.js":
/*!******************************!*\
  !*** ./src/js/parts/form.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function form() {
  // Form
  var message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
  };
  var statusMessage = document.createElement('div');
  statusMessage.classList.add('status');

  function submitForm(form) {
    var input = form.querySelectorAll('input');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      form.appendChild(statusMessage);
      var formData = new FormData(form);

      function postData(data) {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest();
          request.open('POST', 'server.php');
          request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
          request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState === 4 && request.status === 200) {
              resolve();
            } else {
              reject();
            }
          });
          request.send(data);
        });
      }

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }
      }

      var obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      var json = JSON.stringify(obj);
      postData(json).then(function () {
        return statusMessage.textContent = message.loading;
      }).then(function () {
        statusMessage.textContent = message.success;
      }).catch(function () {
        return statusMessage.textContent = message.failure;
      }).then(clearInput);
    });

    function clearInput() {
      for (var i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }

    clearInput();
    input.forEach(function (item) {
      item.addEventListener('input', function (e) {
        if (e.data.search(/[0-9\+]/)) {
          this.value = '';
        }
      });
    });
  }

  submitForm(document.querySelector('.main-form'));
  submitForm(document.querySelector('#form'));
}

module.exports = form;

/***/ }),

/***/ "./src/js/parts/modal.js":
/*!*******************************!*\
  !*** ./src/js/parts/modal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
  var more = document.querySelector('.more'),
      btns = document.querySelectorAll('.description-btn'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close');

  function showOrNone(display, cl, overflow) {
    overlay.style.display = display;
    this.classList.add(cl);
    document.body.style.overflow = overflow;
  }

  ;
  more.addEventListener('click', function () {
    showOrNone.call(more, 'block', 'more-splash', 'hidden');
  });
  close.addEventListener('click', function () {
    showOrNone.call(close, 'none', 'more-splash', 'visible');
  });
  btns.forEach(function (item) {
    item.addEventListener('click', function () {
      showOrNone.call(item, 'block', 'more-splash', 'hidden');
    });
  });
}

module.exports = modal;

/***/ }),

/***/ "./src/js/parts/slider.js":
/*!********************************!*\
  !*** ./src/js/parts/slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.slider-item'),
      prev = document.querySelector('.prev'),
      next = document.querySelector('.next'),
      dotsWrap = document.querySelector('.slider-dots'),
      dots = document.querySelectorAll('.dot');
  showSlides(slideIndex);

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    slides.forEach(function (item) {
      return item.style.display = 'none';
    });
    dots.forEach(function (item) {
      return item.classList.remove('dot-active');
    });
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', function () {
    plusSlides(-1);
  });
  next.addEventListener('click', function () {
    plusSlides(1);
  });
  dotsWrap.addEventListener('click', function (e) {
    for (var i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target === dots[i - 1]) {
        currentSlide(i);
      }
    }
  });
}

module.exports = slider;

/***/ }),

/***/ "./src/js/parts/tabs.js":
/*!******************************!*\
  !*** ./src/js/parts/tabs.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
  var info = document.querySelector('.info-header'),
      tab = document.querySelectorAll('.info-header-tab'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  var hideTabContent = function hideTabContent(a) {
    for (var i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  var showTabContent = function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', function (e) {
    var target = e.target;

    if (target && target.matches('div.info-header-tab')) {
      for (var i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
        }
      }
    }
  });
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/parts/timer.js":
/*!*******************************!*\
  !*** ./src/js/parts/timer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
  var deadline = '2019-05-14';

  var getTimeRemaining = function getTimeRemaining(endTime) {
    var t = Date.parse(endTime) - (Date.parse(new Date()) + new Date().getTimezoneOffset() * 60 * 1000),
        seconds = Math.floor(t / 1000 % 60),
        minutes = Math.floor(t / 1000 / 60 % 60),
        hours = Math.floor(t / (1000 * 60 * 60));
    return {
      'total': t,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  };

  var setClock = function setClock(id, endTime) {
    var timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      var t = getTimeRemaining(endTime);

      if (t.hours < 10) {
        hours.textContent = "0".concat(t.hours);
      } else if (t.minutes < 10) {
        minutes.textContent = "0".concat(t.minutes);
      } else if (t.seconds < 10) {
        seconds.textContent = "0".concat(t.seconds);
      }

      hours.textContent = t.hours;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = '00', minutes.textContent = '00', seconds.textContent = '00';
      }
    }
  };

  setClock('timer', deadline);
}

module.exports = timer;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  "use strict";

  var tabs = __webpack_require__(/*! ./parts/tabs.js */ "./src/js/parts/tabs.js");

  var timer = __webpack_require__(/*! ./parts/timer.js */ "./src/js/parts/timer.js");

  var modal = __webpack_require__(/*! ./parts/modal.js */ "./src/js/parts/modal.js");

  var form = __webpack_require__(/*! ./parts/form.js */ "./src/js/parts/form.js");

  var slider = __webpack_require__(/*! ./parts/slider.js */ "./src/js/parts/slider.js");

  var calc = __webpack_require__(/*! ./parts/calc.js */ "./src/js/parts/calc.js");

  tabs();
  timer();
  modal();
  form();
  slider();
  calc();
});

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map