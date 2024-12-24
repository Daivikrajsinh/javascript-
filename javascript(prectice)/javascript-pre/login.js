document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Please fill in both fields.');
    } else {
        console.log('Logging in:', username);
        alert('This is a demo. Actual login functionality is not implemented.');
    }
});

// Detect input changes and add class "filled" when the user types
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        console.log(input.value);
        
        if (input.value !== "") {
            input.classList.add('filled');
            console.log("hi");
            
        } else {
            input.classList.remove('filled');
            console.log("no");
            
        }
    });
});
