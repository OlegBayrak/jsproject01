var money,
    time;
money = prompt("Какой ваш бюджет на месяц", 100);
time = prompt("Введите дату рождения", "11-08-1995");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : false
}

console.log (money);
console.log(time);
let exp = 0,
    exp2 = 0;
appData.expenses.a = prompt("Введите обязательную статью расходов :", 0);
console.log("Expenses = " + appData.expenses.a);
