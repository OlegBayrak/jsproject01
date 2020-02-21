
let money = prompt("Какой ваш бюджет на месяц", 100);
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

let a1 = prompt("Введите обязательную статью расходов :", "хлеб");
    a2 = prompt("Во сколько обойдется", 10);

appData.expenses.a1 = a1;
appData.expenses.a2 = a2;

console.log (appData.expenses.a1);
console.log(appData.expenses.a2);


alert('Бюджет на 1 день = ' + appData.budget/30);