// let add = document.querySelector(".add");
// let save = document.querySelector(".save");
// let reset = document.querySelector(".reset");
// let output = document.querySelector(".output");
// let savetext = document.querySelector(".savetext");

// add.addEventListener("click", function () {
//     output.innerHTML = +output.innerHTML + 1;
//     save.classList.replace("notallow", "save");
// });

// save.addEventListener("click", function () {
//     if (output.innerHTML == 0) {
//         save.classList.replace("save", "notallow");
//     } else {
//         if (savetext.innerHTML == 0) {
//             savetext.innerHTML = output.innerHTML;
//         } else {
//             savetext.innerHTML += "," + output.innerHTML;
//         }
//         output.innerHTML = 0;
//     }
// });

// reset.addEventListener("click", function () {
//     output.innerHTML = 0;
//     savetext.innerHTML = 0;
//     save.classList.replace("notallow", "save");

// });

// // practise 
//  const isMailSent = true;

// if (isMailSent) {
//   console.log('Mail sent');
// }

// var a = 2;
// var b = 3;
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(b % a);

// var a = 34;
// var b = 21;
// a += b;
// console.log(a)

// var a = 34;
// var b = 21;
// a -= b;
// console.log(a)

// let Name="ram";
// let Name1="sharma";
// Name+=Name1
// console.log(Name);

// let a = 32;
// let b = 31;
// a || b
// console.log(a);

// var a=31;
// var b=31;

// let result=(a==b)
// console.log(result);

// var a = "824"
// var b = -a
// console.log(b);
// // 
// var truthy = false;
// var falsy = !truthy;
// console.log(falsy);

// var x=32
// var y=24

// let result=(y<=x)
// console.log(result);

// // not equal operator

// var d=3;
// var b="4";
// let result=(d!==b)
// console.log(result);

// var a = true;
// console.log(typeof (a));

// // postfix;

// var a = 332;
// var b = ++a
// console.log(b);

// let a = "not rief v";

// if (a === "raining") {
//     console.log("take umbrella");
// } else {
//     console.log("not take umbrella");
// }   

// let a = "ram is coder"
// if (a === "ram is coder") {
//     console.log("ram is coder");
// } else {
//     console.log("ram is not coder");   
// }

// let rate = 200;
// let buying = (rate > 200) ? "i will buy" : "i will not buy";
// console.log(buying);

// let match = "win";
// let result = (match === "win") ? "i will win" : "i will lose";
// console.log(result);



// first 
// let number = 0;
// for (let i = 1; i <= 10; i++) {
//     document.getElementById("first").innerHTML = `<p>1. the sum of numbers from 1 to ${i}: ${number += i}</p>`
// }
// console.log(number);

// // second 
// let a = "";
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         a = a + i + ",";
//         console.log(a);
//         document.getElementById("second").innerHTML = `<p>2. even numbers between 1 and ${i}:${a}</p>`
//     }
// }

// // third
// let b = "";
// for (let i = 10; i >= 1; i--) {
//     b = b + i + ","
//     console.log(b);
//     document.getElementById("third").innerHTML = `<p>3. numbers from 10 to 1 in reverse order: ${b}</p>`
// }

// // fourth 
// let num = 9;
// let c = "";
// for (let i = 1; i <= 10; i++) {
//     c = c + `${num} x ${i} = ${num * i}` + "<br>"
//     console.log(`${num} x ${i} = ${num * i}`);
//     document.getElementById("four").innerHTML = `<p>4. multiplication table: table of: ${num} <br> ${c}</p>`
// }



// 1 to 20 even Number
function printNumberSequences() {
    let output = "";

    output += "1 to 20 even numbers:<br>";
    for (let a = 1; a <= 20; a++) {
        if (a % 2 === 0) {
            output += a + "<br>";
        }
    }

    output += "<br>1 to 20 odd numbers:<br>";
    for (let b = 1; b <= 20; b++) {
        if (b % 2 !== 0) {
            output += b + "<br>";
        }
    }

    output += "<br>Reverse Counting From 10 To 1:<br>";
    for (let c = 10; c >= 1; c--) {
        output += c + "<br>";
    }

    let sum = 0;
    for (let d = 1; d <= 10; d++) {
        sum += d;
    }
    output += "<br>The sum of numbers from 1 to 10 is: " + sum;
    document.getElementById("output").innerHTML = output;
    console.log(output);
}

printNumberSequences();

function generateTable() {
    let inputNumber = document.getElementById("numberInput").value;
    let num = parseInt(inputNumber);
    if (isNaN(num)) {
        document.getElementById("table-container").innerHTML = "Please enter a valid number.";
        return;
    }

    let tableHTML = "<table border='1'>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>" + num + " x " + i + "</td><td>" + (num * i) + "</td></tr>";
    }
    tableHTML += "</table>";
    document.getElementById("table-container").innerHTML = tableHTML;
}
