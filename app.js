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
document.write("<h3>Temperature Converter</h3>")
// 5
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
document.write("<h3>Mark Sheet</h3>")
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
