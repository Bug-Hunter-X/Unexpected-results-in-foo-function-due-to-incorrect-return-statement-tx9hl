function foo(a, b) {
  if (a === 0 || b === 0) {
    return a + b; //Corrected return statement
  }
  return a + b;
}

console.log(foo(0,5)); // expected 5, actual 5
console.log(foo(5,0)); // expected 5, actual 5
console.log(foo(5,5)); // expected 10, actual 10