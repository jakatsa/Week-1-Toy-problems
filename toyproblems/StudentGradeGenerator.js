const  prompt = require("prompt-sync")();

function calculateGrade() {
  // Prompt the user for input
  const userMarks = prompt("Enter student marks (between 0 and 100):");

  // Convert input to a number
  const marks = parseFloat(userMarks);

  // Check if the input is a valid number between 0 and 100
  if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    // Determine the grade based on the specified ranges
    let grade;
    if (marks > 79) {
      grade = "A";
    } else if (marks >= 60 && marks <= 79) {
      grade = "B";
    } else if (marks >= 50 && marks <= 59) {
      grade = "C";
    } else if (marks >= 40 && marks <= 49) {
      grade = "D";
    } else {
      grade = "E";
    }

    // Output the grade
    console.log(`Grade: ${grade}`);
  } else {
    // Handle invalid input
    console.log("Invalid input. Please enter a number between 0 and 100.");
  }
}

// Call the function to prompt the user for input and calculate the grade
calculateGrade();
