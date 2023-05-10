// Example using var

function exampleVar() {
    var x = 10;
  
    if (true) {
      var x = 20; // same variable as the one above
      console.log(x); // outputs 20
    }
  
    console.log(x); // outputs 20
}
  
exampleVar();
  
// Example using let
  
function exampleLet() {
    let x = 10;
  
    if (true) {
      let x = 20; // different variable than the one above
      console.log(x); // outputs 20
    }
  
    console.log(x); // outputs 10
}
  
exampleLet();
  
// Example using const
  
function exampleConst() {
    const x = 10;
  
    if (true) {
      const x = 20; // different variable than the one above
      console.log(x); // outputs 20
    }
  
    console.log(x); // outputs 10
}
  
exampleConst();