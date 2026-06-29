document.addEventListener('DOMContentLoaded', () => {
  const coursesContainer = document.getElementById('courses-container');
  const addCourseBtn = document.getElementById('add-course-btn');
  const calcBtn = document.getElementById('calc-btn');

  // Grade point mapping config matching your scaling model logic
  const gradePoints = {
    A: 5.0,
    B: 4.0,
    C: 3.0,
    D: 2.0,
    E: 1.0,
    F: 0.0
  };

  // Function helper to dynamically spawn clean course rows
  function createRowElement() {
    const row = document.createElement('div');
    row.classList.add('course-row');
    
    row.innerHTML = `
      <input type="text" class="course-code" placeholder="e.g. CSC 101">
      <select class="course-score">
        <option value="">Grade</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
      </select>
      <select class="course-unit">
        <option value="">Unit</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
      </select>
    `;
    return row;
  }

  // Initialize view with a standard 5 row count baseline 
  for (let i = 0; i < 5; i++) {
    coursesContainer.appendChild(createRowElement());
  }

  // Push individual new lines dynamically when requested
  addCourseBtn.addEventListener('click', () => {
    coursesContainer.appendChild(createRowElement());
  });

  // Main calculation engine loop block
  calcBtn.addEventListener('click', () => {
    const scoreElements = document.querySelectorAll('.course-score');
    const unitElements = document.querySelectorAll('.course-unit');

    let totalPoints = 0;
    let totalUnits = 0;

    for (let i = 0; i < scoreElements.length; i++) {
      const grade = scoreElements[i].value.trim().toUpperCase();
      const unit = parseInt(unitElements[i].value);

      // Verify that values aren't left blank before updating calculations
      if (gradePoints.hasOwnProperty(grade) && !isNaN(unit)) {
        totalPoints += gradePoints[grade] * unit;
        totalUnits += unit;
      }
    }

    let gpa = totalUnits > 0 ? (totalPoints / totalUnits).toFixed(2) : 0.00;

    // Output target result string rendering
    document.getElementById('Result').textContent = gpa;

    // Apply scaling logic evaluations safely
    let rating = "";
    if (gpa >= 4.50) {
      rating = "Excellent";
    } else if (gpa >= 3.50) {
      rating = "Very Good";
    } else if (gpa >= 2.50) {
      rating = "Fair";
    } else if (gpa >= 1.50) {
      rating = "Poor";
    } else if (gpa > 0) {
      rating = "Very Bad";
    } else {
      rating = "No Data";
    }

    document.getElementById('Rating').textContent = rating;
  });
});