function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return name + " is " + age + " years old.";
}

console.log(ageCalculator("John", 1995, 2022));

