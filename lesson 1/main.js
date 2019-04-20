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
    appData.expenses[costItem] = sum;
    appData.expenses[costItem2] = sum2;
    let result = userBudget / 30;
    alert(result);
    console.log(appData); // Вывод объекта в консоль для проверки
})();