
  document.querySelector('.calc-btn').addEventListener('click', function () {
    let totalQualityPoints = 0;
    let totalUnits = 0;

    // All spans representing each year
    const yearGroups = document.querySelectorAll('.level span');

    yearGroups.forEach(group => {
      // Get all GPA and Unit inputs within the year
      const inputs = group.querySelectorAll('input');
      let gpa1 = parseFloat(inputs[0].value) || 0;
      let gpa2 = parseFloat(inputs[1].value) || 0;
      let unit1 = parseFloat(inputs[2].value) || 0;
      let unit2 = parseFloat(inputs[3].value) || 0;

      // Calculate quality points for both semesters
      totalQualityPoints += (gpa1 * unit1) + (gpa2 * unit2);
      totalUnits += unit1 + unit2;
    });

    // Calculate CGPA
    let cgpa = totalUnits > 0 ? (totalQualityPoints / totalUnits).toFixed(2) : 0;

    // Display CGPA
    document.getElementById('Result').textContent = cgpa;

    // Rating logic
    let rating = '';
    if (cgpa >= 4.50) {
      rating = "Excellent";
    } else if (cgpa >= 3.50) {
      rating = "Very Good";
    } else if (cgpa >= 2.50) {
      rating = "Fair";
    } else if (cgpa >= 1.50) {
      rating = "Poor";
    } else if (cgpa > 0) {
      rating = "Very Poor";
    } else {
      rating = "No Data";
    }

    // Display Rating
    document.getElementById('Rating').textContent = rating;
  });
