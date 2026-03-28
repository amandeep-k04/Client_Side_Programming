// ================================
// Student Access and Activity Tracker
// ================================

// Part 1: Declare Variables and Collect Data

let studentName = "Gurfateh Singh";        
let age = 25;                           
const program = "IT Programming";       
let completedAssignments = 4;           
let isLoggedIn = true;                  

console.log("=== Student Access System ===\n");

// --------------------------------
// Part 2: Validate Input Using Conditionals
// --------------------------------

if (studentName === "") {
    console.log("Error: Student name cannot be empty");
}
// for age checking
if (age < 18) {
    console.log("Access denied: Student must be 18 or older");
} else {
    console.log("Access granted");
}
// login
if (!isLoggedIn) {
    console.log("Please log in to continue");
} else {
    console.log("Login successful");
}

console.log("");

// --------------------------------
// Part 3: Use switch to Check Program Type
// --------------------------------

switch (program) {
    case "IT Programming":
        console.log("Welcome to the IT Programming program");
        break;
    case "Networking":
        console.log("Welcome to the Networking program");
        break;
    case "Cybersecurity":
        console.log("Welcome to the Cybersecurity program");
        break;
    default:
        console.log("Program not recognized");
}

console.log("");

// --------------------------------
// Part 4: Use Loops to Track Assignment Progress
// --------------------------------

// for loop
for (let i = 1; i <= completedAssignments; i++) {
    console.log("Assignment " + i + " completed");
}

console.log("");

// while loop
let remaining = 5 - completedAssignments;

while (remaining > 0) {
    console.log("Remaining assignments: " + remaining);
    remaining--;
}

console.log("");

// --------------------------------
// Part 5: Write and Call Functions
// --------------------------------

function displaySummary(name, program) {
    console.log("Student Name: " + name);
    console.log("Program: " + program);
}

displaySummary(studentName, program);

console.log("");

function calculateProgress(completed, total) {
    return (completed / total) * 100;
}

let progress = calculateProgress(completedAssignments, 5);
console.log("Progress: " + progress + "%");

console.log("");

// --------------------------------
// Part 6: Arrow Function for Validation
// --------------------------------

const hasPassed = completed => completed >= 3;

if (hasPassed(completedAssignments)) {
    console.log("Status: Passed");
} else {
    console.log("Status: Not Passed");
}
