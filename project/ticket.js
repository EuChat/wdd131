document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const ticketType = document.getElementById('ticketType').value;
    const ticketDay = document.getElementById('ticketDay').value;
    const ticketQuantity = document.getElementById('ticketQuantity').value;

    // Save booking information in localStorage
    const bookingData = {
        name,
        email,
        ticketType,
        ticketDay,
        ticketQuantity
    };
    localStorage.setItem('bookingData', JSON.stringify(bookingData));

    const confirmationMessage = `Thank you, ${name}! You have successfully booked ${ticketQuantity} ${ticketType} ticket(s) for ${ticketDay}. A confirmation email has been sent to ${email}.`;

    document.getElementById('confirmationMessage').textContent = confirmationMessage;
});