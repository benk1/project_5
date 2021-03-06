//Exercise: 1
//PART I
//QN 1)

var company = "Integrify Academy";
console.log(company);
console.log(company.length);
var upperCase = company.toUpperCase();
console.log(upperCase);
console.log(company.toLowerCase());
console.log(company.slice(0, 1));
console.log(company.substr(0, 1));
console.log(company.includes("Academy"));
console.log(company.split());
console.log(company.replace("Integrify", "Microsoft"));
console.log(company.charAt(10));
console.log(company.charCodeAt(10));
console.log(company.indexOf("e"));
console.log(company.lastIndexOf("e"));
console.log(company.trim());
console.log(company.startsWith("Integrify Academy"));
console.log(company.endsWith("Integrify Academy"));
console.log(company.match(/a/g));
console.log("Integrify".concat("Academy"));
console.log(company.repeat(5));

//QN 2
var myAge = 25;
var yourAge = 30;
F;
console.log(`I am ${myAge} yearsold.`);
console.log(`You are ${yourAge} years old.`);

//QN 3
userInput = prompt("Enter your age");
if (userInput >= 18) {
  console.log("You are old enough to drive");
} else {
  var remainder = 18 - userInput;
  console.log(`you are left with  ${remainder} yrs to drive`);
}

//QN 4

var myAge = 25;
yourAge = prompt("Enter your age");
if (myAge < yourAge) {
  var ageDifference = yourAge - myAge;
  console.log(`You are ${ageDifference} yrs old than you`);
}

//QN 5
var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "IBM",
  "Apple",
  "Oracle",
  "Amazon"
];
console.log(itCompanies);
console.log(itCompanies.length);
for (var i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}
var capitalised = console.log(itCompanies.map(index => index.toUpperCase()));

var string = itCompanies.join(", ");
console.log(`${string} are big IT companies`);
sorted_itCompanies = itCompanies.sort();
console.log(sorted_itCompanies);
reversed_itCompanies = itCompanies.reverse();
console.log(reversed_itCompanies);

//QN 6

var itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "IBM",
  "Apple",
  "Oracle",
  "Amazon"
];
for (var i = 0; i < itCompanies.length; i++) {
  console.log(itCompanies[i]);
}

//QN 7
function printArray(array) {
  console.log(array);
}
printArray([1, 2, 3, 4]);

//QN 8
function reverse(array) {
  var tempArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    tempArray.push(array[i]);
  }
  return tempArray;
}
console.log(reverse([1, 2, 3, 4, 5]));

//QN 9
function capitalizeArray(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i].toUpperCase();
  }
  return array;
}
console.log(capitalizeArray(["mimi", "wewe", "nyie"]));

//QN 10
function removeItem(array, element) {
  return array.filter(e => e !== element);
}
console.log(removeItem([1, 2, 3, 4, 5], 1));

// OR
function removeItem(array) {
  removedArray = array.splice(2, 1);
  return removedArray;
}
console.log(removeItem([1, 2, 3, 4, 5, 6]));

function addItem(array) {
  var newArray = array.concat(6, 7);
  return newArray;
}
console.log(addItem([1, 2, 3, 4, 5]));

//QN 11
function sumOfNumbers(number) {
  sum = 0;
  for (i = 0; i <= number; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(10));

//QN 12
function sumOfOdds(number) {
  sum = 0;
  for (var i = 0; i <= number; i++) {
    if (i % 2 == 1) {
      sum += i;
    }
  }
  return sum;
}
console.log(sumOfOdds(7));

//QN 13
function sumOfEven(number) {
  var sum = 0;
  for (var i = 0; i <= number; i += 2) {
    sum += i;
  }
  return sum;
}
console.log(sumOfEven(8));

//QN 14
function evensAndOdds(number) {
  var num_of_evens = [];
  var num_of_odds = [];
  for (i = 0; i <= number; i++) {
    if (i % 2 == 0) {
      num_of_evens.push(i);
    } else if (i % 2 == 1) {
      num_of_odds.push(i);
    }
  }
  console.log(`number of odds are: ${num_of_odds.length}`);
  console.log(`number of evens are: ${num_of_evens.length}`);
}
evensAndOdds(100);

//QN 15
function randomHexaNumberGenerator(num) {
  var result = "#";
  for (var i = 0; i < 6; i++) {
    result += Math.floor(Math.random() * 16).toString(16);
  }
  return result;
}
console.log(randomHexaNumberGenerator());

//QN 16
function userIdGenerator() {
  var lettersNumbers =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var randomId = "";
  for (var i = 0; i < 7; i++) {
    randomId +=
      lettersNumbers[Math.floor(Math.random() * lettersNumbers.length)];
  }
  return randomId;
}
console.log(userIdGenerator());

//QN 17

//QN 18
function displayDateTime() {
  var date = new Date();
  var ndate = date.getDate();
  //var nday = date.getDay();
  var nmonth = date.getMonth() + 1;
  var nHrs = date.getHours();
  var nMin = date.getMinutes();
  var nYear = date.getFullYear();
  console.log(ndate + "/" + nmonth + "/" + nYear + "  " + nHrs + ":" + nMin);
}
displayDateTime();

//QN 19
function rgbColorGenerator() {
  console.log(
    "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
  );
}
rgbColorGenerator();

//QN 20
var personAccount = {
  firstName: "Ben",
  lastName: "Kakengi",

  incomes: [{ bonus: 10000 }, { online: 5500 }, { salary: 4000 }],

  expenses: [{ food: 500, gym: 800, travel: 1000 }],

  totalIncome: function() {
    sum = 0;
    for (let key in this.income) {
      sum += this.income[key];
    }
    return sum;
    //let sum = this.income.bonus + this.income.online + this.income.salary;
    //return sum;
  },
  totalExpenses: function() {
    let sum1 = this.expenses.food + this.expenses.gym + this.expenses.travel;
    return sum1;
  },

  accountInfo: function() {
    return `${this.firstName} ${this.lastName}.`;
  },

  accountBalance: function() {
    let balance = this.totalIncome() - this.totalExpenses();
    return balance;
  }
};
console.log(personAccount.totalExpenses());
console.log(personAccount.accountBalance());

//QN 21
console.log(personAccount.totalIncome());

//PART II
//QN 1
function lotteryNumbers() {
  var array_of_numbers = [];
  var array_of_nums = [];
  for (var i = 0; i < 7; i++) {
    var numbers = Math.floor(Math.random() * 40) + 1;
    var num = Math.floor(Math.random() * 40) + 1;
    array_of_numbers.push(numbers);
    array_of_nums.push(num);
    var string = array_of_numbers.join(" ");
    var string1 = array_of_nums.join(" ");
  }
  console.log(string);
  console.log(string1);
}
lotteryNumbers();

//OPTION
function lotteryNumbers() {
  const array = [];
  for (let i = 0; i < 7; i++) {
    let nums = Math.floor(Math.random() * 9) + 1;
    array.push(nums);
  }
  const sortedArray = array.sort((a, b) => {
    return a - b;
  });
  console.log(sortedArray);
}

//QN 2
const numOfRows = prompt(" how many lottery rows would like to have");
function digitsArrayUserInput(numOfRows) {
  for (let i = 0; i < numOfRows; i++) {
    lotteryNumbers();
  }
}

digitsArrayUserInput(numOfRows);

//QN 3
function lotteryNumbers() {
  const array = [];
  for (let i = 0; i < 7; i++) {
    let nums = Math.floor(Math.random() * 9) + 1;
    array.push(nums);
  }
  const sortedArray = array.sort((a, b) => {
    return a - b;
  });
  console.log(sortedArray);
}

//Exercise 1
//1.Variable
//(a)
var firstName = "Ben";
var lastName = "kakengi";
var maritalStaus = "divorced";
var country = "Tanzania";
var age = 29;
console.log(`${firstName} ${lastName} ${maritalStaus} ${country}  ${country}`);
//(b)
var firstName = "Ben1",
  lastName = "kakengi",
  maritalStaus = "divorced",
  country = "Tanzania",
  age = 28;

console.log(`${firstName} ${lastName} ${maritalStaus} ${country}  ${country}`);

//(c)
var myAge = 25;
var yourAge = 30;
console.log(`I am ${myAge} years old.`);
console.log(`You are ${yourAge} years old.`);

// 4 Boolean
//(a)
console.log(2 == "2");
console.log(true == true);
console.log(true || false);

// 5 Arithmetic OPERATOR
console.log(operandOne + 2);
console.log(operandTwo + 4);

//6.Comparison Operator
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
//console.log(4! == 4);
console.log(4 == "4");
console.log(4 != "4");

//7.logical operators
//8 REPEAT DONE ABOVE
//9
let a = 4;
let b = 3;
a > b ? console.log("a is greater than b") : onsole.log("a is less than b");

//QN 10  DONE REPEAT

//QN 11
//(a)
for (var i = 0; i < 11; i++) {
  console.log(i);
}
//(b)

//QN 13 RE-DO
var personAccount = {
  firstName: "Ben",
  lastName: "Kakengi",

  incomes: [
    { description: "bonus", amount: 10000 },
    { description: "online", amount: 5500 },
    { description: "salary", amount: 4000 }
  ],

  expenses: [
    { description: "food", amount: 500 },
    { description: "gym", amount: 800 },
    { description: "travel", amount: 1000 }
  ],

  totalIncome: function() {
    let sum = 0;
    for (let key in this.incomes) {
      sum += this.incomes[key];
    }
    return sum;
    //let sum = this.income.bonus + this.income.online + this.income.salary;
    //return sum;
  },
  totalExpenses: function() {
    let sum = 0;
    for (let key in this.expenses) {
      sum += this.expenses[key];
    }
    return sum;
    //t sum1 = this.expenses.food + this.expenses.gym + this.expenses.travel;
    // return sum1;
  },

  accountInfo: function() {
    return `This is the account belong to ${this.firstName} ${this.lastName}.`;
  },

  addIncome: function() {
    let description = prompt("Enter description");
    let amount = prompt("Enter amount");
    this.incomes.push({ description: description, amount: amount });
  },

  addExpense: function() {
    let description = prompt("Enter description");
    let amount = prompt("Enter amount");
    this.addExpenses.push({ description: description, amount: amount });
  },

  accountBalance: function() {
    let balance = this.totalIncome() - this.totalExpenses();
    return balance;
  }
};
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpenses());
console.log(personAccount.accountBalance());

//QN 15
string =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";
arrayOfIncomes = string.match(/\d+/g);

let total =
  (parseInt(arrayOfIncomes[0]) +
    parseInt(arrayOfIncomes[arrayOfIncomes.length - 1])) *
  12;
for (let i = 1; i < arrayOfInc - 1; i++) {
  total += parseInt(arrayOfIncomomes.lengthes[i]);
}
console.log(total);

//QN 16
//(a)
/*unction getStringList(array) {
  return array.map(String);
}
console.log(getStringList([1, 2, 3, 4, 5, 6]));*/
//(b)
function getStringList(array) {
  return array.filter(item => typeof item == "string");
}
console.log(getStringList([2, 3, "wewe", "mim", "nyie"]));

//(C)
function categorizeCountries(array) {
  return array.filter(item => item.length <= 7);
}
console.log(categorizeCountries(countries));

//(d)
function getFirstTenCountries(array) {
  return array.slice(0, 10);
}
console.log(getFirstTenCountries(countries));

//(e)
function getLastTenCountries(array) {
  return array.slice(1).slice(-10);
}
console.log(getLastTenCountries(countries));

//(f)
