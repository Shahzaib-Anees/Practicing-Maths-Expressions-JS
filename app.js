// Page no 05 
// 1
document.write("<h3>Simple Prompt Calculator</h3>")
var first_num = +prompt("Enter First Number");
var second_num = +prompt("Enter Second Number");

document.write(`The sum of ${first_num} and ${second_num} = ${first_num + second_num}`);
document.write("<br>");
document.write(`The substraction of ${first_num} and ${second_num} = ${first_num - second_num}`);
document.write("<br>");
document.write(`The Multiplication of ${first_num} and ${second_num} = ${first_num * second_num}`);
document.write("<br>");
document.write(`The Division of ${first_num} and ${second_num} = ${first_num / second_num}`);
document.write("<br>");
document.write(`The Modulus of ${first_num} and ${second_num} = ${first_num % second_num}`);


document.write("<br>");
document.write("<br>");

// 2
document.write("<h3>Incriment and Decriment Variable using Script</h3>")
let num;
document.write(`The value of variable after declaration is ${num}`);
document.write("<br>");
num = 5;
document.write(`The initial value of variable  is ${num}`);

document.write("<br>");
num++;
document.write(`The value of variable after incriment  is ${num}`);

document.write("<br>");
num += 7;
document.write(`The value of variable after addition  is ${num}`);

document.write("<br>");
num--;
document.write(`The value of variable after decrement  is ${num}`);

document.write("<br>");
num %= 3;
document.write(`The remainder is ${num}`);

// 3
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<h3>Movie Ticket Cost</h3>")
let price_of_1ticket = 600;
let cost_of_5tickets = price_of_1ticket * 5;
document.write(`Cost of buying 5 tickets of a movie is ${cost_of_5tickets}`);

// 4
document.write("<br>");
document.write("<br>");
document.write("<br>");
document.write("<h3>Prompt Maths Table Generator</h3>")
let user_input_table = +prompt("Give me a number to print its table:")
document.write(`Table of ${user_input_table} is;`)
for (a = 1; a < 11; a++) {
    document.write("<br>");
    document.write(`${user_input_table} x ${a} = ${user_input_table * a}`)
}

document.write("<br>");
document.write("<br>");
document.write("<br>");

// 5
document.write("<h3>Temperature Converter</h3>")
let celsius_temp = +prompt("I can convert Celsius into Farenheit \n You can give me a value in Celsius to convert it into Farenheit")

document.write(`The Output of your Celsius value is ${(celsius_temp * 9 / 5) + 32}`);

document.write("<br>");
let farenheit_temp = (celsius_temp * 9 / 5) + 32;
document.write(`The Output of your Farenheit value is ${(farenheit_temp - 32) * 5 / 9}`);


// 6
document.write("<br>");
document.write("<br>");
document.write("<h3>Shopping Cart Order Receipt</h3>");
let item1_cost = 650;
let item2_cost = 100;
let ship_charges = 100;

document.write(`Total Cost of your Order is ${(item1_cost * 3) + (item2_cost * 7) + 100}`);


// 7
document.write("<br>");
document.write("<br>");
document.write("<h3>Mark Sheet</h3>");
let total_marks = 980;
let student_marks = 804;
let percentage = (student_marks * 100) / total_marks;
document.write(`Total marks : ${total_marks};`);
document.write("<br>");
document.write(`Marks Obtained : ${student_marks};`);
document.write("<br>");
document.write(`Percentage : ${percentage};`);

// 8
document.write("<br>");
document.write("<br>");
document.write("<h3>Currency Calculator</h3>")
let dollar_value = 10;
let riyal_value = 25;
document.write(`Total Currency in PKR : ${(dollar_value * 104.80) + (riyal_value * 28)}`);


// 10
document.write("<h3>Incriment and Decriment Variables</h3>")
let num_variable = 5;
num_variable+=5;//10
num_variable*=10;//100
num_variable/=2;//50
document.write(`The value of Variable after Incriment and Decriment : ${num_variable}`);//Answer=10;

// 11
// Age Calculator;
document.write("<br>");
document.write("<br>");
document.write("<h3>Age Calculator</h3>")
alert( `I can Calculate your age`);
let birth_year=+prompt("Enter your Birth year");
let current_year = 2024;
document.write(`Your current Age is ${current_year - birth_year}`);

// 12 
document.write("<h3>The Geometrizer</h3>");
let radius_of_circle = 20;
document.write(`The Circumference of Circle is : ${2 * 3.142 * radius_of_circle}`);
document.write("<br>");
document.write("<br>");
let radius_of_circle_square=radius_of_circle ** 2;
document.write(`The Area of Circle is : ${3.142 * radius_of_circle_square}`);

// 13 
document.write("<br>");
document.write("<br>");document.write("<h3>LifeTime Supply Caculator</h3>")
let favouriteSnack = "Choclate Chip";
let current_age = 15;
let estimated_age=65;
let amount_of_sacks_per_day = 3;
document.write(`You will need ${(estimated_age - current_age) * amount_of_sacks_per_day} to last you until the ripe old age of ${estimated_age};`);