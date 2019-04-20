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
    let costItem = prompt("Введите обязательную статью расходов в этом месяце", "");
    let sum = +prompt("Во сколько обойдётся?", "");
    let costItem2 = prompt("Введите обязательную статью расходов в этом месяце", "");
    let sum2 = +prompt("Во сколько обойдётся?", "");

    for(let i = 0; i < 2; i++) {
        let costItem = prompt("Введите обязательную статью расходов в этом месяце", "");
        let sum = +prompt("Во сколько обойдётся?", "");
        if( (typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[costItem] = sum;
        } else {
        console.log("Что-то не то") 
        }
    }
    // let count = 2;
    // while(count) {
    //     let costItem = prompt("Введите обязательную статью расходов в этом месяце", "");
    //     let sum = +prompt("Во сколько обойдётся?", "");
    //     if( (typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
    //         console.log("done");
    //         appData.expenses[costItem] = sum;
    //     } else {
    //     console.log("Что-то не то") 
    //     }
    //     count--;
    // }

    // let count2 = 2;
    // do {
    //     let costItem = prompt("Введите обязательную статью расходов в этом месяце", "");
    //     let sum = +prompt("Во сколько обойдётся?", "");
    //     if( (typeof(a)) === 'string' && (typeof(a)) !=null && (typeof(b)) !=null && a != '' && b != '' && a.length < 50) {
    //         console.log("done");
    //         appData.expenses[costItem] = sum;
    //     } else {
    //     console.log("Что-то не то") 
    //     }
    //     count2--;
    // } while(count2);


    appData.moneyPerDay = appData.userBudget / 30;

    alert("Ежедневный бюджет: " + appData.moneyPerDay);
    console.log(appData); // Вывод объекта в консоль для проверки
})();