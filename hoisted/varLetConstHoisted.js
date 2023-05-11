{
    var a=10;
    let b=20;
    const c=30;
    console.log(a); //10
    console.log(b); //20
    console.log(c); //30
}
console.log(a); //10
console.log(b); //Uncaught ReferenceError: b is not defined
console.log(c); //Uncaught ReferenceError: c is not defined

// b & c are also hoisted but these are not in the global scope insted these two variables are in block scope for this example

// A let or const variable is said to be in a "temporal dead zone" (TDZ) from the start of the block until code execution reaches the line where the variable is declared and initialized