function foo(a, b) {
  if (a === 0 || b === 0) { 
    return 0; //This line is incorrect for the intended behavior
  }
  return a + b;
}

console.log(foo(0,5)); // expected 5, actual 0
console.log(foo(5,0)); // expected 5, actual 0
console.log(foo(5,5)); // expected 10, actual 10