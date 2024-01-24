function checkSpeed(speed) {
  const speedLimit = 70;
  const demeritPointsThreshold = 5;

  if (speed <= speedLimit) {
    console.log("Ok");
  } else {
    const demeritPoints = Math.floor(
      (speed - speedLimit) / demeritPointsThreshold
    );

    if (demeritPoints > 12) {
      console.log("License suspended");
    }
    console.log(`Points: ${demeritPoints}`);
  }
}

// Example usage
checkSpeed(80); // Output: "Points: 2"
checkSpeed(65); // Output: "Ok"
checkSpeed(200); // Output: "License suspended Points: 26"
