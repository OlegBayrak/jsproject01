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
    savings : true
};

function detectDayBudget(){
    let days = +prompt("Сколько дней в месяце?", 30),
        dayBudget = (money/30).toFixed(4);
        alert("Бюджет на день = " + dayBudget);
        return dayBudget;
}

function ChooseExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов :", 'Iphone12'),
            b = +prompt("Во сколько обойдется", 1000);

        if( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a !='' && b != '' && a.length<50/* && b.length<50*/)
            { 
                console.log("done");
                appData.expenses[a] = b;
            } else {i = i - 1; console.log('WRONG DATA!!!!!');}
        }
           
}

ChooseExpenses();

function CheckSaving(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
    
    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита = " + (appData.monthIncome).toFixed(4));
    }
}

/*function chooseOptExpenses(){
    for (i=0; i<3; i++) {
        let exp1 = prompt("Введите статью дополнительного дохода :", "каша"),
    }
    
}*/


console.log(appData);
CheckSaving();
daybudg = detectDayBudget();



function detectLevel(){
    if(daybudg < 100){
        console.log("Минимальный уровень достатка!");
    } else if (daybudg > 100 && appData.moneyperday < 2000){
        console.log("Средний уровень достатка!");
    } else if (daybudg > 2000){
        console.log("Высокий уровень достатка!");
    } else {console.log("Произошла ошибка!");}
}
detectLevel();

//appData.moneyperday = (appData.budget / 30).toFixed() ;



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
            i = i - 1;
        }
    }
       
}*/

// cycle do while
/*let i=0;
    do {
        let a = prompt("Введите обязательную статью расходов :", "хлеб"),
            b = prompt("Во сколько обойдется", 10);
            i++;

    } while (i<2);*/

// cycle while do

/*while (i<2) {
    let a = prompt("Введите обязательную статью расходов :", "хлеб"),
        b = prompt("Во сколько обойдется", 10);
    i++;
} */
