'use strict';
let money, time;


function start() {
    money = +prompt('Ваш бюджет за месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет за месяц', '');
    }
}

start();

var appData = {
    budzhet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
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
}

chooseExpenses();


function detectDayBudget() {
    appData.moneyPerDay = (appData.budzhet / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Это минимальный уровень достатка')
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
        console.log('Это средний уровень достатка')
    } else if (appData.moneyPerDay > 2000) {
        console.log('Это высокий уровень достатка')
    } else {
        console.log('Произошла ошибка')
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings === true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt('Под какой процент');

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Ваш доход в месяц с депозита: " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpensions() {
    for (var i = 0; i < 3; i++) {
        var a = prompt('Статья необязательных расходов?');

        if ((typeof (a)) === "string" && (typeof (a)) != null 
            && a != '' && a.length < 50) {
            console.log('done');
            appData.optionalExpenses[i+1] = a;
        } else {
            i--;
            alert('Введите пож-та данные о статье необязательных расходов');
            continue;
        }
    }
}

chooseOptExpensions();

console.log(appData);


/*Ответ на вопрос к 3 заданию
  () говорит о том, что функция должна выполниться когда управление доходит до нее
*/


