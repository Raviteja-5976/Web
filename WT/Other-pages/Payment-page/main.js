function validateForm() {
    // Retrieve form fields
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var zip = document.getElementById('zip').value;


    if (fullName === "" || email === "" || address === "" || city === "" || state === "" || zip === "") {
        alert("All fields must be filled out");
        return false;
    }
    return true;
}


var submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('click', validateForm);

var formInputs = document.querySelectorAll('input, select');
formInputs.forEach(function(input) {
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            validateForm();
        }
    });
});