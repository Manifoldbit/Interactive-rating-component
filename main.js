document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.querySelector('.Submit');
    const card2 = document.querySelector('.card-2');
    const printingRating = document.querySelector('.printingRating');

    // Event listener for rating buttons
    const ratingButtons = document.querySelectorAll('.btn');
    ratingButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove 'selected' class from all buttons
            ratingButtons.forEach(btn => btn.classList.remove('selected'));
            // Add 'selected' class to the clicked button
            button.classList.add('selected');
        });
    });

    // Event listener for submit button
    submitButton.addEventListener('click', function () {
        // Find the selected rating
        const selectedRating = document.querySelector('.btn.selected');
        
        // Display card-2 only if a rating is selected
        if (selectedRating) {
            card2.style.display = 'block';
            printingRating.textContent = selectedRating.textContent;
        } else {
            // Optionally, you can provide feedback if no rating is selected
            alert('Please select a rating before submitting.');
        }
    });
});