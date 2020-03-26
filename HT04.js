
let money, time;

function start(){
    money = +prompt("Какой ваш бюджет на месяц", 32000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "2020-02-24");
   
    while(isNaN(money) || money =="" || money == null){ //isNan проверерка что цифра
        money = +prompt("Какой ваш бюджет на месяц", '');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : true,
    ChooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов :", 'Iphone12'),
                b = +prompt("Во сколько обойдется", 1000);
    
            if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b != '' && a.length<50/* && b.length<50*/)
                { 
                    console.log("done");
                    appData.expenses[a] = b;
                } else {i = i - 1; console.log('WRONG DATA!!!!!');}
            }
    },
    detectDayBudget: function(){
        appData.moneyperday = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет " + appData.moneyperday);
    },
    detectLevel: function(){
        if(daybudg < 100){
            console.log("Минимальный уровень достатка!");
        } else if (daybudg > 100 && appData.moneyperday < 2000){
            console.log("Средний уровень достатка!");
        } else if (daybudg > 2000){
            console.log("Высокий уровень достатка!");
        } else {console.log("Произошла ошибка!");}
    },
    CheckSaving: function(){
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
        
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита = " + (appData.monthIncome).toFixed(4));
        }
    },
    ChooseOptExpenses: function(){
        for (let i=1;i<3;i++){
            let opt = prompt("Статья необязательных расходов?","да");
            appData.optionalExpenses[i] = opt;
        }
    },
    chooseIncome: function(){
        let items = prompt('Что принесёт дополнительных доход? (перечислить через запятую','');
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Что-то пошло не так!!!!!!");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("ÐœÐ¾Ð¶ÐµÑ‚ Ñ‡Ñ‚Ð¾-Ñ‚Ð¾ ÐµÑ‰Ðµ?"));
            appData.income.sort();
        }

    
    appData.income.forEach (function (itemmassive, i) {
        alert("Способы заработка: " + (i+1) + " - " + itemmassive);
    });



}
};

for (let key in appData) {
console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}





