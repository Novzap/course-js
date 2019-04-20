(function() {
    "use strict";

    let userBudget = +prompt("Ваш бюджет на месяц?", "");
    let userData = prompt("Введите дату в формате YYYY-MM-DD", "");

    let appData = {
        userBudget,
        timeData: userData,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false
    };

    for(let i = 0; i < 2;) {
        let costItem = prompt("Введите обязательную статью расходов в этом месяце", "");
        let sum = +prompt("Во сколько обойдётся?", "");
        if( (typeof(costItem)) === 'string' && (typeof(costItem)) !=null && (typeof(sum)) !=null && costItem != '' && sum != '' && costItem.length < 50) {
            console.log("done");
            appData.expenses[costItem] = sum;
            i++;
        } else {
            alert("Введите корректные данные")
        }
    }
    // let count = 2;
    // while(count) {
    //     let costItem = prompt("Введите обязательную статью расходов в этом месяце", "");
    //     let sum = +prompt("Во сколько обойдётся?", "");
    //     if( (typeof(costItem)) === 'string' && (typeof(costItem)) !=null && (typeof(sum)) !=null && costItem != '' && sum != '' && costItem.length < 50) {
    //         console.log("done");
    //         appData.expenses[costItem] = sum;
    //         count--;
    //     } else {
    //          console.log("Введите корректные данные");
    //     }
    // }

    // let count2 = 2;
    // do {
    //     let costItem = prompt("Введите обязательную статью расходов в этом месяце", "");
    //     let sum = +prompt("Во сколько обойдётся?", "");
    //     if( (typeof(costItem)) === 'string' && (typeof(costItem)) !=null && (typeof(sum)) !=null && costItem != '' && sum != '' && costItem.length < 50) {
    //         console.log("done");
    //         appData.expenses[costItem] = sum;
    //         count2--;
    //     } else {
    //     console.log("Введите корректные данные"); 
    //     }
    // } while(count2);


    appData.moneyPerDay = appData.userBudget / 30;

    alert("Ежедневный бюджет: " + appData.moneyPerDay);

    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 & appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Ошибка");
    }
    console.log(appData); // Вывод объекта в консоль для проверки
})();