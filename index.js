function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function inc(n) {
<<<<<<< HEAD
  return n+1;
}

function dec(n) {
  return n-1;
}

function makeInt(n) {
  return parseInt(n, 10);
}

function preserveDecimal(n) {
  return parseFloat(n);
=======
  n++;
}

function dec(n) {
  n--;
}

function makeInt(n) {
  parseInt(n, 10);
}

function preserveDecimal(n) {
  parseFloat(n);
>>>>>>> 23d8444b1e63b79c4f543129956672a930434bc3
}