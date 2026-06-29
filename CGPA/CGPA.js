document.addEventListener('DOMContentLoaded', () => {
  const yearsContainer = document.getElementById('years-container');
  const addYearBtn = document.getElementById('add-year-btn');
  const calcBtn = document.getElementById('calc-btn');
  
  let yearCount = 1;

  // Add Year Functionality
  addYearBtn.addEventListener('click', () => {
    yearCount++;
    
    // Create new elements cleanly structured exactly like the HTML pattern
    const yearCard = document.createElement('div');
    yearCard.classList.add('year-card');
    
    yearCard.innerHTML = `
      <h4>Year ${yearCount}</h4>
      <div class="input-group">
        <input type="number" step="0.01" min="0" max="5" class="semester-gpa-1" placeholder="1st Sem GPA">
        <input type="number" step="0.01" min="0" max="5" class="semester-gpa-2" placeholder="2nd Sem GPA">
        <input type="number" min="0" class="semester-unit-1" placeholder="1st Sem Units">
        <input type="number" min="0" class="semester-unit-2" placeholder="2nd Sem Units">
      </div>
    `;
    
    yearsContainer.appendChild(yearCard);
  });

  // Calculate CGPA Functionality
  calcBtn.addEventListener('click', () => {
    let totalQualityPoints = 0;
    let totalUnits = 0;

    const yearCards = document.querySelectorAll('.year-card');

    yearCards.forEach(card => {
      // Pull nodes dynamically using explicit contextual classes
      const gpa1 = parseFloat(card.querySelector('.semester-gpa-1').value) || 0;
      const gpa2 = parseFloat(card.querySelector('.semester-gpa-2').value) || 0;
      const unit1 = parseFloat(card.querySelector('.semester-unit-1').value) || 0;
      const unit2 = parseFloat(card.querySelector('.semester-unit-2').value) || 0;

      // Calculate quality points for both semesters inside this card block
      totalQualityPoints += (gpa1 * unit1) + (gpa2 * unit2);
      totalUnits += unit1 + unit2;
    });

    // Calculate final CGPA split safety check
    let cgpa = totalUnits > 0 ? (totalQualityPoints / totalUnits).toFixed(2) : 0.00;

    // Display CGPA
    document.getElementById('Result').textContent = cgpa;

    // Classification / Rating metric matching original scale rules
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

    // Display Rating output
    document.getElementById('Rating').textContent = rating;
  });
});