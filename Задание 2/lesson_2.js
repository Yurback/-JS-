'use strict';


var money = +prompt('Ваш бюджет за месяц', '');
var time = prompt('Введите дату в формате YYYY-MM-DD','');


var appData = {
    budzhet:  money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

for (var i=0; i<2; i++) {
    var Qst_a = prompt('Введите обязательную статью в этом месяце','');
    var Qst_b = prompt('Во сколько обойдется','');

    if ((typeof(Qst_a)) === "string" &&  (typeof(Qst_a)) != null && (typeof(Qst_b)) != null 
        && Qst_a != '' && Qst_b != '' && Qst_a.length < 50 ) {
            console.log('done')
            appData.expenses[Qst_a] = Qst_b;
    } else {
        i--;
        alert('Введите пож-та данные о статье в этом месяце');
        continue
    }
};
/* ________________________________2 доп.цикла / while / do ..... while /_____________________________
var num_Qst = 2; // цикл while
while (num_Qst > 0) {
    var Qst_a = prompt('Введите обязательную статью в этом месяце','');
    var Qst_b = prompt('Во сколько обойдется','');

    if ((typeof(Qst_a)) === "string" &&  (typeof(Qst_a)) != null && (typeof(Qst_b)) != null 
        && Qst_a != '' && Qst_b != '' && Qst_a.length < 50 ) {
            console.log('done')
            appData.expenses[Qst_a] = Qst_b;
            num_Qst--;
    } else {
            alert('Введите пож-та данные о статье в этом месяце');
        continue
    }
}

do {    // цикло do...while
    var Qst_a = prompt('Введите обязательную статью в этом месяце','');
    var Qst_b = prompt('Во сколько обойдется','');

    if ((typeof(Qst_a)) === "string" &&  (typeof(Qst_a)) != null && (typeof(Qst_b)) != null 
        && Qst_a != '' && Qst_b != '' && Qst_a.length < 50 ) {
            console.log('done')
            appData.expenses[Qst_a] = Qst_b;
            num_Qst--;
    } else {
        alert('Введите пож-та данные о статье в этом месяце');
        continue
    }

}
while (num_Qst != 0)
_________________________________________________________________________________________________________________
*/

appData.moneyPerDay = appData.budzhet / 30

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Это минимальный уровень достатка')
} else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <2000){
    console.log('Это средний уровень достатка')
} else if (appData.moneyPerDay > 2000) {
    console.log('Это высокий уровень достатка')
} else {
    console.log('Произошла ошибка')
}

console.log(appData);

/*Ответ на вопрос ко второму заданию
    Всего существует 3 вида циклов:
    - While, 
    - Do....While,
    - For
*/


