'use strict';
// 1)
let begin_Calc = document.getElementById('start'),
// 2)
    budget_Value = document.getElementsByClassName('budget-value')[0],
    daybudget_Value = document.getElementsByClassName('daybudget-value')[0],
    level_Value = document.getElementsByClassName('level-value')[0],
    expenses_Value = document.getElementsByClassName('expenses-value')[0],
    optionalexpenses_Value = document.getElementsByClassName('optionalexpenses-value')[0],
    income_Value = document.getElementsByClassName('income-value')[0],
    monthsavings_Value = document.getElementsByClassName('monthsavings-value')[0],
    yearsavings_Value = document.getElementsByClassName('yearsavings-value')[0],
// 3)
    expenses_Item = document.getElementsByClassName('expenses-item'),
// 4)
    btn_approve_expenses = document.getElementsByTagName('button')[0],
    btn_approve_option_expenses = document.getElementsByTagName('button')[1],
    btn_count_budget = document.getElementsByTagName('button')[2],
// 5)
    optionalexpenses_item = document.querySelectorAll(".optionalexpenses-item"),
// 6)
    choose_income = document.querySelector(".choose-income"),
    checkbox_savings = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    year_value = document.querySelector(".year-value"),
    month_value = document.querySelector(".month-value"),
    day_value = document.querySelector(".day-value");

let money, time;

begin_Calc.addEventListener('click', function() {
    money = +prompt('Ваш бюджет за месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет за месяц', '');
    }

    appData.timeData = time;
    appData.budzhet = money;
    budget_Value.textContent = money.toFixed(); 
    year_value.value = new Date(Date.parse(time)).getFullYear();
    month_value.value = new Date(Date.parse(time)).getMonth() + 1;
    day_value.value = new Date(Date.parse(time)).getDate();

    // _______________ Добавляем активность кнопкам, только при нажатии "НАЧАТЬ РАСЧЕТ"____________________

    btn_approve_expenses.addEventListener("click", function() {
        console.log(expenses_Item.length);
        let sum = 0;

        for (var i = 0; i < expenses_Item.length; i++) {
            var Qst_a = expenses_Item[i].value,
                Qst_b = expenses_Item[++i].value;

            if ((typeof (Qst_a)) === "string" && (typeof (Qst_a)) != null && (typeof (Qst_b)) != null
                && Qst_a != '' && Qst_b != '' && Qst_a.length < 50) {
                appData.expenses[Qst_a] = Qst_b;
                sum += +Qst_b;
                
            } else {
                i--;
                alert('Введите пож-та данные о статье в этом месяце');
                continue;
            }
        }

        expenses_Value.textContent = sum;

    });

    btn_approve_option_expenses.addEventListener('click', function(){
        console.log(btn_approve_option_expenses);
        console.log(optionalexpenses_item);
        for (var i = 0; i < optionalexpenses_item.length; i++) {
            console.log(optionalexpenses_item[i]);
            var a = optionalexpenses_item[i].value;

            if ((typeof (a)) === "string" && (typeof (a)) != null
                && a != '' && a.length < 50) {
                console.log('done');
                appData.optionalExpenses[i + 1] = a;
                optionalexpenses_Value.textContent += a + " ";
            } 
        }
    });

    btn_count_budget.addEventListener('click', function() {
        if (appData.budzhet != undefined) {
            appData.moneyPerDay = ((appData.budzhet - expenses_Value.innerHTML)/ 30).toFixed();
            daybudget_Value.textContent = appData.moneyPerDay;

            if (appData.moneyPerDay < 100) {
                level_Value.textContent ='Это миинимальный уровень достатка';
            } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000) {
                level_Value.textContent ='Это средний уровень достатка';
            } else if (appData.moneyPerDay > 2000) {
                level_Value.textContent ='Это высокий уровень достатка';
            } else {
                level_Value.textContent ='Произошла ошибка';
            }
        } else {
            daybudget_Value.textContent ='Произошла ошибка';
        }
    });

    choose_income.addEventListener('input', function() {
        var items = choose_income.value;
        appData.income = items.split(", ");
        income_Value.textContent = items;
    });

    checkbox_savings.addEventListener("click", function() {
        if (appData.savings == true) {
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    });

    sum.addEventListener('input', function() {
        
        if (appData.savings == true) {
            console.log("привет");
            let sumValue = +sum.value,
                percentValue = +percent.value;
            
            appData.monthIncome = sumValue / 100 / 12 * percentValue;
            appData.yearIncome = sumValue / 100 * percentValue;

            monthsavings_Value.textContent = appData.monthIncome.toFixed(1);
            yearsavings_Value.textContent = appData.yearIncome.toFixed(1);
        }

    });

    percent.addEventListener('input', function() {
        if (appData.savings == true) {
            let sumValue = +sum.value,
            percentValue = +percent.value;
        
        appData.monthIncome = sumValue / 100 / 12 * percentValue;
        appData.yearIncome = sumValue / 100 * percentValue;

        monthsavings_Value.textContent = appData.monthIncome.toFixed(1);
        yearsavings_Value.textContent = appData.yearIncome.toFixed(1);
        }

    });
});



var appData = {
    budzhet: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}

