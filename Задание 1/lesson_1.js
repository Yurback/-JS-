'use strict';

var money = prompt('Ваш бюджет за месяц', '__руб.');
var time = prompt('Введите дату в формате YYYY-MM-DD','');

var Qst_1 = prompt('Введите обязательную статью в этом месяце','');
var Qst_1_1 = prompt('Во сколько обойдется','');

var Qst_2 = prompt('Введите обязательную статью в этом месяце','');
var Qst_2_1 = prompt('Во сколько обойдется','');

var appData = {
    budzhet:  money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}
appData.expenses[Qst_1] = Qst_1_1;
appData.expenses[Qst_2] = Qst_2_1;



alert("Ваш бюджет на один день составил: " + (+appData.budzhet)/30 + " руб.");

console.log(appData);

/* 1 вопрос - 7 типов данных;
   2 вопрос - использовать команду console.log();
   3 вопрос - true && false = false / true || false = true;
*/


