document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var amount = document.getElementById('amount').value;
    document.getElementById('confirmationMessage').innerText = 
        'Thank you, ' + name + '! Your donation of $' + amount + ' is greatly appreciated.';
});