const form = document.getElementById('registrationForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const inputs = ['first-name', 'last-name', 'phone', 'roll-number', 'email', 'gender', 'branch', 'password', 'confirm-password'];
  inputs.forEach(function(input) {
    if (!document.getElementById(input).value) {
      alert('Please enter your ' + input.replace('-', ' '));
      return;
    }
  });
});