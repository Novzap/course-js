(function() {
    "use strict";
    let userBudget,
        userData;

    function start() {
        while(isNaN(userBudget) || userBudget == '' || userBudget == null) {
            userBudget = +prompt("Ваш бюджет на месяц?", "");
        }
        userData = prompt("Введите дату в формате YYYY-MM-DD", "");
    }
    start();


    let appData = {
        userBudget,
        timeData: userData,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };

    function chooseExpenses() {
        for(let i = 0; i < 2;) {
            let costItem = prompt("Введите обязательную статью расходов в этом месяце", "");
            let sum = +prompt("Во сколько обойдётся?", "");
            if( (typeof(costItem)) === 'string' && costItem !=null && sum !=null && costItem != '' && sum != '' && costItem.length < 50) {
                console.log("done");
                appData.expenses[costItem] = sum;
                i++;
            } else {
                alert("Введите корректные данные");
            }
        }
    }
    chooseExpenses();

    function chooseOptExpenses() {
        for(let i = 0; i < 3; i++) {
            let costItem = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i + 1] = costItem;
        }
    }
    chooseOptExpenses();

    function detectDayBudget() {
        appData.moneyPerDay = (appData.userBudget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    }
    detectDayBudget();

    function detectLevel() {
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Ошибка");
        }    
    }
    detectLevel();


    function checkSavings() {
        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", ""),
                percent = +prompt("Под какой процент?", "");
            appData.monthIncome = save/100/12*percent;
            alert(`Доход в месяц с вашего депозита: ${appData.monthIncome.toFixed()}`);
        }
    }
    checkSavings();
    console.log(appData); // Вывод объекта в консоль для проверки
})();