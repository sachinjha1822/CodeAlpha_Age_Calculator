function calculateAge() {
    // Retrieve input values
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    // Check if entered date is a valid date
    const isValidDate = isValidDateOfBirth(day, month, year);

    if (isValidDate) {
        // Calculate age based on entered date
        const today = new Date();
        const birthDate = new Date(year, month - 1, day); // month - 1 because months are 0 indexed in JavaScript

        // Calculate age
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
         // Display result with image
         const resultElement = document.getElementById('result');
         resultElement.innerHTML = `
             <div class="success-result">
                 <img src="image1.png" alt="Success">
                 <p>You are ${age} years old.</p>
             </div>
         `;

        // Remove any previously set invalid date message
        resultElement.classList.remove('invalid-date');
    } else {
        // Display message for invalid date
        const resultElement = document.getElementById('result');

        // Add class to show the invalid date style
        resultElement.classList.add('invalid-date');
    }
}

function isValidDateOfBirth(day, month, year) {
    const dateOfBirth = new Date(year, month - 1, day); // month - 1 because months are 0 indexed in JavaScript
    const today = new Date();

    // Check if dateOfBirth is a real date and not in the future
    return !isNaN(dateOfBirth) && dateOfBirth <= today;
}

// Toggle day/night mode
const toggleSwitch = document.getElementById('theme-toggle');
const bodyClass = document.body.classList;

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        bodyClass.add('day-mode');
        bodyClass.remove('night-mode');
    } else {
        bodyClass.add('night-mode');
        bodyClass.remove('day-mode');
    }
});
