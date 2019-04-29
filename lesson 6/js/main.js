let calculation = document.querySelector('#start');
let values = document.querySelector('.result-table');
let expensesItem = document.querySelectorAll('.expenses-item');
let expensesBtn = document.querySelector('.expenses-item-btn');
let countBtn = document.querySelector('.count-budget-btn');
let dayBudgetValue = document.querySelector('.daybudget-value');
let optionalExpensesBtn = document.querySelector('.optionalexpenses-btn');
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let chooseIncomeInput = document.querySelector('.choose-income');
let incomeValue = document.querySelector('.income-value');
let sumInput = document.querySelector('#sum');
let percentInput = document.querySelector('#percent');
let yearInput = document.querySelector('.year-value');
let monthInput = document.querySelector('.month-value');
let dayInput = document.querySelector('.day-value');
let budgetValue = document.querySelector('.budget-value');
let expensesValue = document.querySelector('.expenses-value');
let levelValue = document.querySelector('.level-value');
let checkSavings = document.querySelector('#savings');
let monthSavingsValue = document.querySelector('.monthsavings-value');
let yearSavingsValue = document.querySelector('.yearsavings-value');
let btn = document.querySelectorAll('button');
let userBudget,
userData;


calculation.addEventListener('click', function() {
    while(isNaN(userBudget) || userBudget == '' || userBudget == null) {
        userBudget = +prompt("Ваш бюджет на месяц?", "");
    }
    userData = prompt("Введите дату в формате YYYY-MM-DD", "");
    appData.userBudget = userBudget;
    appData.timeData = userData;
    budgetValue.textContent = userBudget.toFixed();
    yearInput.value = new Date(Date.parse(userData)).getFullYear();
    monthInput.value = new Date(Date.parse(userData)).getMonth() + 1;
    dayInput.value = new Date(Date.parse(userData)).getDay();
    for(let i = 0; i < btn.length; i++) {
        btn[i].disabled = false;
    }
});
let sum = 0;
expensesBtn.addEventListener('click', function() {
    for(let i = 0; i < expensesItem.length;) {
        let a = expensesItem[i].value; 
        let b = expensesItem[++i].value;
        if( (typeof(a)) === 'string' && a !=null && b !=null && a != '' && b != '' && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
            i++;
        } else {
            alert("Введите корректные данные");
        }
    }
    expensesValue.textContent = sum;
});


expensesItem.forEach(function(i) {
    i.addEventListener('input', function() {
        expensesBtn.disabled = false;
    });
});

optionalExpensesBtn.addEventListener('click', function() {
    for(let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

optionalExpensesItem.forEach(function(i) {
    i.addEventListener('input', function() {
        optionalExpensesBtn.disabled = false;
    });
});

countBtn.addEventListener('click', function() {

    if(appData.userBudget != undefined) {
        appData.moneyPerDay = ((appData.userBudget - sum) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        sum = 0;
        if(appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Максимальный уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

chooseIncomeInput.addEventListener('input', function() {
    let items = chooseIncomeInput.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if(appData.savings) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumInput.addEventListener('input', function() {
    if(appData.savings) {
        let sum = +sumInput.value,
            percent = +percentInput.value;
            
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentInput.addEventListener('input', function() {
    if(appData.savings) {
        if(appData.savings) {
            let sum = +sumInput.value,
                percent = +percentInput.value;
                
                appData.monthIncome = sum/100/12*percent;
                appData.yearIncome = sum/100*percent;
    
                monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
                yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    }
});

let appData = {
    userBudget,
    timeData: userData,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};
console.log(appData); // Вывод объекта в консоль для проверки