document.querySelector('form').addEventListener('submit', 
    function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        if (username === 'admin' && password === 'password') {
            confirm('Login successful!');
            window.location.href = 'home.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });