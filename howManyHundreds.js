function howManyHundreds(num) {
  let remainder = num / 100; 
  return Math.floor(remainder);
}






console.log(howManyHundreds(769));
/*
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
*/