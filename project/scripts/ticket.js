document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    let confirmationMessage = document.getElementById('confirmationMessage');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const ticketType = document.getElementById('ticketType').value;
        const ticketDay = document.getElementById('ticketDay').value;
        const ticketQuantity = document.getElementById('ticketQuantity').value;

        if (name && email && ticketType && ticketDay && ticketQuantity) {
            confirmationMessage.innerHTML = `
                <p>Thank you, ${name}! Your tickets have been successfully booked.</p>
                <p>Details:</p>
                <ul id="important">
                    <li>Email: ${email}</li>
                    <li>Ticket Type: ${ticketType}</li>
                    <li>Day: ${ticketDay}</li>
                    <li>Number of Tickets: ${ticketQuantity}</li>
                </ul>
                <style>
                    #important{
                        list-style: none;
                        display: flex;
                        flex-direction: column;
                    }
                </style>
            `;
            confirmationMessage.style.color = 'green';
        } else {
            confirmationMessage.textContent = 'Please fill in all fields.';
            confirmationMessage.style.color = 'red';
        }
    });
});