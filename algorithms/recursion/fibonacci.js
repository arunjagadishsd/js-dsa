function fib(n) {
  // This is naive solution it stops executing after fib(40)
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
console.log(fib(15));


