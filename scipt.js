let money, time;

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : false
};

function start(){
    money = +prompt("Какой ваш бюджет на месяц", 10000);
    time = prompt("Введите дату в формате YYYY-MM-DD", "1995-11-08");
   
    while(isNaN(money) || money =="" || money == null){ //isNan проверерка что цифра
        money = +prompt("Какой ваш бюджет на месяц", '');
    }
}

start();

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

appData.moneyperday = appData.budget / 30 ;
console.log(typeof(appData.moneyperday));


console.log (money);
console.log(time);
alert("Ежедневный бюджет =" + appData.moneyperday);

if(appData.moneyperday < 100){
    console.log("Минимальный уровень достатка!");
} else if (appData.moneyperday > 100 && appData.moneyperday < 2000){
    console.log("Средний уровень достатка!");
} else if (appData.moneyperday > 2000){
    console.log("Высокий уровень достатка!");
} else {console.log("Произошла ошибка!");}




console.log(appData);


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
