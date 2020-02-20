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