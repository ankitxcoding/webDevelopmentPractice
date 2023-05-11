var x=10;
console.log(x);
{
    var x=100;
    console.log(x);
}
console.log(x);

// var x=100 over shadowed the var x=10 at both scopes i.e global scope and block scope because "var" is hoisted on global scope