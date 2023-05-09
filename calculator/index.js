let n1=prompt("Enter an integer: ");
let n2=prompt("Enter an other integer: ");
document.getElementById("num1-el").textContent=n1;
document.getElementById("num2-el").textContent=n2;
let answer=document.getElementById("ans");
let num1=parseInt(n1);
let num2=parseInt(n2);

function addition() {
    answer.textContent="Answer = "+(num1+num2);
}
function subtraction() {
    answer.textContent="Answer = "+(num1-num2);
}
function multiplication() {
    answer.textContent="Answer = "+(num1*num2);
}
function division() {
    answer.textContent="Answer = "+(num1/num2);
}