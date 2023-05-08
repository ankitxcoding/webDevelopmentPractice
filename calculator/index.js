let num1=20;
let num2=10;
document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;
let answer=document.getElementById("ans");

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