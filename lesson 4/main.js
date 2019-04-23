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
        savings: true,
        chooseExpenses: () => {
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
        },
        detectDayBudget: () => {
            appData.moneyPerDay = (appData.userBudget / 30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
        },
        detectLevel: () => {
            if(appData.moneyPerDay < 100) {
                console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
                console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 2000) {
                console.log("Высокий уровень достатка");
            } else {
                console.log("Ошибка");
            }
        },
        checkSavings: () => {
            if(appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?", ""),
                    percent = +prompt("Под какой процент?", "");
                appData.monthIncome = save/100/12*percent;
                alert(`Доход в месяц с вашего депозита: ${appData.monthIncome.toFixed()}`);
            }
        },
        chooseOptExpenses: () => {
            for(let i = 0; i < 3; i++) {
                let costItem = prompt("Статья необязательных расходов?", "");
                appData.optionalExpenses[i + 1] = costItem;
            }
        },
        chooceIncome: () => {
            let items;
            while(items == '' || items == null || !isNaN(items) || items === undefined) {
                items = prompt("Что принесёт дополнительный доход? (перечислите через запятую)", "");
            }    
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то ещё? ", ""));
            appData.income.sort();
            appData.income.forEach((items, i) => {
                alert("Способы доп заработка: " + (1 + i) + ") " + items);
            });
        }
    };
    let all = [];
    for(let key in appData) {
        all.push(key);
    }
    alert("Наша программа включает в себя данные:\n" + all);

    console.log(appData); // Вывод объекта в консоль для проверки
})();