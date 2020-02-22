
let money = +prompt("Какой ваш бюджет на месяц", 100);
let time = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : false
};

console.log (money);
console.log(time);

/*let a1 = prompt("Введите обязательную статью расходов :", "хлеб"),
    a2 = prompt("Во сколько обойдется", 10);*/


// Commented part that was created during the lecture
/*for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов :", "хлеб"),
        b = prompt("Во сколько обойдется", 10);
    if(typeof(a)==='String'&& typeof(a) != null && typeof(b)==='String'&& typeof(b) != null 
        && a !='' && b != '' && a.length<50 && b.length<50){ 
            console.log("done");
        appData.expenses[a] = b;
        //else {
            //вернуться к циклу заново
        //}
    }
       
}*/

// cycle do while
let i=0;
    do {
        let a = prompt("Введите обязательную статью расходов :", "хлеб"),
            b = prompt("Во сколько обойдется", 10);
            i++;

    } while (i<2);

// cycle while do

/*while (i<2) {
    let a = prompt("Введите обязательную статью расходов :", "хлеб"),
        b = prompt("Во сколько обойдется", 10);
    i++;
}; */



appData.moneyperday = appData.budget/30;


alert("Ежедневный бюджет =" + appData.moneyperday);
if(appData.moneyperday < 100){
    console.log("Минимальный уровень достатка!")
} else if (appData.moneyperday > 100 && appData.moneyperday < 2000){
    console.log("Средний уровень достатка!");
} else if (appData.moneyperday > 2000){
    console.log("Высокий уровень достатка!")
} else {console.log("Произошла ошибка!")} 




console.log(appData);