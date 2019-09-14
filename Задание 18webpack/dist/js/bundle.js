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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let calc = __webpack_require__(/*! ./moduls/calc.js */ "./src/js/moduls/calc.js"),
        modal = __webpack_require__(/*! ./moduls/modal.js */ "./src/js/moduls/modal.js"),
        promise = __webpack_require__(/*! ./moduls/promise.js */ "./src/js/moduls/promise.js"),
        slider = __webpack_require__(/*! ./moduls/slider.js */ "./src/js/moduls/slider.js"),
        tabs = __webpack_require__(/*! ./moduls/tabs.js */ "./src/js/moduls/tabs.js"),
        timer = __webpack_require__(/*! ./moduls/timer.js */ "./src/js/moduls/timer.js");

    calc();
    modal();
    promise();
    slider();
    tabs();
    timer();

})

/***/ }),

/***/ "./src/js/moduls/calc.js":
/*!*******************************!*\
  !*** ./src/js/moduls/calc.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum * personsSum) * 4000;

        if (restDays.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

    })

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum * personsSum) * 4000;

        if (restDays.value == "") {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }

    })

    place.addEventListener('change', function () {
        if (restDays.value == "" || restDays.value == "") {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = +this.options[this.selectedIndex].value * a;
        }
    })
}

module.exports = calc;

/***/ }),

/***/ "./src/js/moduls/modal.js":
/*!********************************!*\
  !*** ./src/js/moduls/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modal() {
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close");

    function hiddeBody() {
        overlay.style.display = 'block';
        this.classList.add('more-splash')
        document.body.style.overflow = 'hidden';
    }

    more.addEventListener('click', hiddeBody)

    close.addEventListener('click', function () {
        overlay.style.display = 'none';
        this.classList.remove('more-splash');
        document.body.style.overflow = '';
    })


    let tabShow_more = document.getElementsByClassName("description-btn");

    for (var i = 0; i < tabShow_more.length; i++) {
        tabShow_more[i].addEventListener('click', hiddeBody);
    }
}

module.exports = modal;

/***/ }),

/***/ "./src/js/moduls/promise.js":
/*!**********************************!*\
  !*** ./src/js/moduls/promise.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function promise() {
    let message = {
        loading: "Загрузка...",
        sucsess: "Спасибо, скоро мы с вами свяжемся",
        failure: "Что-то пошло не так..."
    }

    let form = document.querySelector('.main-form'),
        form2 = document.getElementById('form'),
        input = document.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    function XHR() {
        event.preventDefault();
        event.target.appendChild(statusMessage);
        let promise = function () {
            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();
                request.open("POST", 'server.php');
                // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');       - Для формата Formdata
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');         // - Для формата json
                let formdata = new FormData(event.target);

                let obj = {};
                formdata.forEach(function (value, key) {
                    obj[key] = value;
                });
                console.log(obj);
                let json = JSON.stringify(obj);

                request.send(json);                                                                 // - Для отправки json
                // request.send(formdata);                                                             - Для отправки FormData

                request.addEventListener("readystatechange", () => {
                    // if (request.readyState < 4) {                            // Так не работает если будет ошибка и reject не сработает
                    //     resolve(); }  
                    if (request.status == 200) {
                        resolve();
                    } else {
                        reject();
                    }
                })

            })

        }
        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        promise()
            .finally(clearInput)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.sucsess)
            .catch(() => statusMessage.innerHTML = message.failure);


    }

    form.addEventListener('submit', XHR);
    form2.addEventListener('submit', XHR);

}

module.exports = promise;

/***/ }),

/***/ "./src/js/moduls/slider.js":
/*!*********************************!*\
  !*** ./src/js/moduls/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function slider() {
    let numSlider = 1,
        slids = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot');

    showSlide(numSlider);

    function showSlide(n) {
        if (n > slids.length) numSlider = 1;
        else if (n < 1) numSlider = slids.length;

        slids.forEach((item) => item.style.display = 'none');
        //     for (let i = 0; i < slids.length; i++){              Тоже самое что и метод forEach (см.192 строка)
        //         slids[i].style.display = 'none';
        //     }
        dots.forEach((item) => item.classList.remove('dot-active'));

        slids[numSlider - 1].style.display = 'block';
        dots[numSlider - 1].classList.add('dot-active');
        console.log(n);
    }

    function pluseSlide(n) {
        showSlide(numSlider += n);
    }

    prev.addEventListener('click', () => {
        pluseSlide(-1);
    });

    next.addEventListener('click', () =>
        pluseSlide(1)
    );

    dotsWrap.addEventListener('click', function (event) {
        console.log('работает');
        for (var i = 1; i <= dots.length; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
                console.log(i);
                showSlide(numSlider = i);
            }
        }
    })
}

module.exports = slider;

/***/ }),

/***/ "./src/js/moduls/tabs.js":
/*!*******************************!*\
  !*** ./src/js/moduls/tabs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
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

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    })
}

module.exports = tabs;

/***/ }),

/***/ "./src/js/moduls/timer.js":
/*!********************************!*\
  !*** ./src/js/moduls/timer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function timer() {
    let deadline = "2019-10-09 23:00:00";
    console.log(new Date(Date.parse(deadline)));
    console.log(new Date(Date.parse(deadline) - 1000 * 60 * 60 * 3));
    console.log(Date.parse(new Date()));
    console.log(new Date());


    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - new Date(),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60));

        if (seconds < 10) seconds = "0" + seconds;
        if (minutes < 10) minutes = "0" + minutes;
        if (hours < 10) hours = "0" + hours;

        return {
            total: t,
            seconds: seconds,
            minutes: minutes,
            hours: hours
        }
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector(".seconds"),
            timerInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timerInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }

    setClock('timer', deadline)
}

module.exports = timer;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map