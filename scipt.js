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

appData.expenses.a = prompt("Введите обязательную статью расходов :", "хлеб");
console.log("Expenses = " + appData.expenses.a);
appData.expenses.b = prompt("Во сколько обойдется", 10);
console.log("Во сколько обойдётся = " + appData.expenses.b);
