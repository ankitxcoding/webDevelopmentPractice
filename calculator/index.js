let n1=prompt("Enter an integer: ");
let n2=prompt("Enter an other integer: ");
document.getElementById("num1-el").textContent=n1;
document.getElementById("num2-el").textContent=n2;
let answer=document.getElementById("ans");
num1=parseInt(n1);
num2=parseInt(n2);

function addition() {
    answer.textContent=num1+num2;
}
function subtraction() {
    answer.textContent=num1-num2;
}
function multiplication() {
    answer.textContent=num1*num2;
}
function division() {
    answer.textContent=num1/num2;
}