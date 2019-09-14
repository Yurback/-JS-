require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function () {

    'use strict';

    let calc = require("./moduls/calc.js"),
        modal = require('./moduls/modal.js'),
        promise = require('./moduls/promise.js'),
        slider = require('./moduls/slider.js'),
        tabs = require('./moduls/tabs.js'),
        timer = require('./moduls/timer.js');

    calc();
    modal();
    promise();
    slider();
    tabs();
    timer();

})