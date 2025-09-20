
  document.querySelector(".calc-btn").addEventListener("click", function () {
    const scoreElements = document.querySelectorAll(".scores");
    const unitElements = document.querySelectorAll(".unit");

    // Score-to-point map
    const gradePoints = {
      A: 5.0,
      B: 4.0,
      C: 3.0,
      D: 2.0,
      E: 1.0,
      F: 0,
    };

    let totalPoints = 0;
    let totalUnits = 0;

    for (let i = 0; i < scoreElements.length; i++) {
      const grade = scoreElements[i].value.trim().toUpperCase();
      const unit = parseInt(unitElements[i].value);

      if (gradePoints.hasOwnProperty(grade) && !isNaN(unit)) {
        const gradePoint = gradePoints[grade];
        totalPoints += gradePoint * unit;
        totalUnits += unit;
      }
    }

    let gpa = 0;
    if (totalUnits > 0) {
      gpa = totalPoints / totalUnits;
    }

    // Round to 2 decimal places
    gpa = gpa.toFixed(2);

    // Display GPA
    document.getElementById("Result").textContent = gpa;

    // Display Rating
    let rating = "";
    if (gpa >= 4.5) {
      rating = "Excellent";
    } else if (gpa >= 3.5) {
      rating = "Very Good";
    } else if (gpa >= 2.5) {
      rating = "Fair";
    } else if (gpa >= 1.5) {
      rating = "Poor";
    } else {
      rating = "Very Bad";
    }

    document.getElementById("Rating").textContent = rating;
  });
