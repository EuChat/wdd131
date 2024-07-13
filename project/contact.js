window.addEventListener('DOMContentLoaded', function() {
    // Check if booking information is available in localStorage
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));

    if (bookingData) {
        document.getElementById('contactName').value = bookingData.name;
        document.getElementById('contactEmail').value = bookingData.email;
    }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('contactName').value;
    let email = document.getElementById('contactEmail').value;
    let message = document.getElementById('message').value;

    const confirmationMessage = `Thank you, ${name}. Your message has been sent.`;

    document.getElementById('confirmationMessage').textContent = confirmationMessage;
});