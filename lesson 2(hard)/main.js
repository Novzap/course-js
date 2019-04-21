(function() {
    "use strict";

    // Дни недели

    let week = ["Понедельник" , "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
    for(let i = 0; i < week.length; i++) {
        let elem = document.createElement('div');
        elem.innerText = week[i];
        if(week[i] === "Суббота" || week[i] === "Воскресенье") {
         elem.style.fontWeight = 'bold';   
        }
        if(week[i] === "Понедельник") { // Текущий день
            elem.style.fontStyle = 'italic';
        }
        document.body.appendChild(elem);
    }

    // Задача с выводом цифр 

    let arr = ["334", "5453", "234235346", "87698", "9850458", "0437387", "75857345"];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][0] === "3" || arr[i][0] == "7") {
            console.log(arr[i]);
        }
    }
})();