
//   PART 1: Variables & Conditionals

let userName = "Esther";
let userAge = 20;

// Simple conditional
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}


//   PART 2: Functions

// Function 1: Greet the user
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function 2: Add two numbers
function addNumbers(a, b) {
  return a + b;
}

console.log(greetUser(userName));
console.log("2 + 3 =", addNumbers(2, 3));



// PART 3: Loops

// Loop 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log("For loop count:", i);
}

// Loop 2: While loop
let count = 0;
while (count < 3) {
  console.log("While loop count:", count);
  count++;
}



//   PART 4: DOM Interactions

const titleEl = document.getElementById("title");
const messageEl = document.getElementById("message");
const btnEl = document.getElementById("actionBtn");
const listEl = document.getElementById("list");

// 1. Change text content
titleEl.textContent = "Welcome to My JavaScript Demo";

// 2. Add click event
btnEl.addEventListener("click", function() {
  messageEl.textContent = greetUser(userName) + " You clicked the button!";
  
  // 3. Create and append list items
  for (let i = 1; i <= 3; i++) {
    let li = document.createElement("li");
    li.textContent = "List item " + i;
    listEl.appendChild(li);
  }
});
