//let calc = function(a,b){
 //   return(a+b);
//}

let calc = (a,b) => a + b;

console.log(calc(5,6));
console.log(calc(1,6));

function retVar(){
    let num = 50;
    return num;
}

let anothernum = retVar();
console.log(anothernum);

let str ="tEsT";
console.log(str.toLocaleUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));