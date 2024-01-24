function steps(n) {
  for (let i = 1; i <= n; i++) {
    let stair = "";

    // Add '# ' characters
    for (let j = 1; j <= i; j++) {
      stair += "#";
    }

    // Add spaces to align the steps
    for (let k = i + 1; k <= n; k++) {
      stair += " ";
    }

    // Log each step to the console
    console.log(stair);
  }
}

// Test the function with different inputs
steps(2);
// Adding an empty line for better readability
console.log();
steps(3);
// Adding an empty line for better readability
console.log();
steps(7);
