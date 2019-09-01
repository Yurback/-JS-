'use strict';

let money, time;

let dat = new Date(2019,7,24,23,45,00);
console.log(dat);

function start() {
   
    money = +prompt('Ваш бюджет за месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет за месяц', '');
    }
    return sergey;
}
// start();

let x =5;
// console.log(++x);
let arr = ["apple", [3], {weight: 100, color: x, height: {l:50}}];

let P, L;
console.log(!!(P || L));

var T = new Date();
console.log(T.toLocaleTimeString());

let M = new Set();
let N = new Set();
M.add([4,4,2,5,2,4]);
N.add([5,2,4]);
console.log((M.size==N.size));



let a = 5,
    b = -Infinity;
    console.log(+("привет" && 4 && 2 && "zzzz"));

    g;
(function() {
    g = 5555;
    g = g/"5";
})();
// doit();
let c = (a,b)=>a+b;
let d = c(a,b);
console.log(d);
console.log(g);

// let doit = function doits() {
//     g = "Привет"
// };
// function doit() {
//     g = "Привет"
// }

var appData = {
    budzhet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (var i = 0; i < 2; i++) {
            var Qst_a = prompt('Введите обязательную статью в этом месяце', '');
            var Qst_b = prompt('Во сколько обойдется', '');

            if ((typeof (Qst_a)) === "string" && (typeof (Qst_a)) != null && (typeof (Qst_b)) != null
                && Qst_a != '' && Qst_b != '' && Qst_a.length < 50) {
                appData.expenses[Qst_a] = Qst_b;
            } else {
                i--;
                alert('Введите пож-та данные о статье в этом месяце');
                continue;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budzhet / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Это минимальный уровень достатка')
        } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
            console.log('Это средний уровень достатка')
        } else if (appData.moneyPerDay > 2000) {
            console.log('Это высокий уровень достатка')
        } else {
            console.log('Произошла ошибка')
        }
    },
    checkSavings: function () {
        if (appData.savings === true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt('Под какой процент');

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Ваш доход в месяц с депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpensions: function () {
        for (var i = 0; i < 3; i++) {
            var a = prompt('Статья необязательных расходов?');

            if ((typeof (a)) === "string" && (typeof (a)) != null
                && a != '' && a.length < 50) {
                console.log('done');
                appData.optionalExpenses[i + 1] = a;
            } else {
                i--;
                alert('Введите пож-та данные о статье необязательных расходов');
                continue;
            }
        }
    },
    chooseIncome: function () {
        let items;
        // && items === '' && typeof(items) != "string" && typeof(items) === null)
        while (typeof (items) === "undefined" || items === '' || items === null || isNaN(items) == false) {
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую)', '');
        }

        console.log(items);
        appData.income = items.split(", ");
        appData.income.push(prompt("Может что-то еще?"));
        appData.income.sort();

        let textAlert = "Способы дополнительного заработка включают: \n";
        appData.income.forEach(function (value, key, arr) {
            textAlert += (key + 1) + ": " + value + ";\n";
        })
        alert(textAlert);
    }
}

// appData.chooseIncome();

// for (let key in appData) {
//     console.log("Наша программа включает в себя данные " + key + " со значениями: " + appData[key]);
// }


/*Ответ на вопрос к 4 заданию
  нужно использовать цикл for(let KEY in OBJ)
*/


