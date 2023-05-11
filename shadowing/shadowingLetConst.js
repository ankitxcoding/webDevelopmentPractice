console.log("let example");
let x=10;
console.log(x);
{
    let x=100;
    console.log(x);
}
console.log(x);

console.log("const example");
let y=10;
console.log(y);
{
    let y=100;
    console.log(y);
}
console.log(y);

// in this example let x=100 & const y=100 are shodowed the let x=10 & const y=10 only in block scope but not in the script scope because let and const are not lie on the global scope