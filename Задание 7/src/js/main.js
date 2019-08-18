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

console.log(begin_Calc, budget_Value, daybudget_Value, level_Value, expenses_Value, optionalexpenses_Value, income_Value,
    monthsavings_Value, yearsavings_Value, expenses_Item, btn_approve_expenses, btn_approve_option_expenses, btn_count_budget,
    optionalexpenses_item, choose_income, checkbox_savings, sum, percent, year_value, month_value, day_value);