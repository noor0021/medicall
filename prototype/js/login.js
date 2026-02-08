

let isSignup = false;

function toggleAuthMode() {
    isSignup = !isSignup;

    const nameGroup = document.getElementById('nameGroup');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const toggleButton = document.getElementById('toggleButton');
    const nameInput = document.getElementById('name');

    if (isSignup) {
        
        nameGroup.classList.remove('hidden');
        nameInput.required = true;
        authTitle.textContent = 'Create Account';
        authSubtitle.textContent = 'Join us to manage your health';
        toggleButton.textContent = 'Already have an account? Sign In';
    } else {
        
        nameGroup.classList.add('hidden');
        nameInput.required = false;
        authTitle.textContent = 'Welcome Back';
        authSubtitle.textContent = 'Sign in to continue';
        toggleButton.textContent = "Don't have an account? Sign Up";
    }
}

function handleSubmit(event) {
    event.preventDefault();

    window.location.href = 'dashboard.html';
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Login page loaded');
});
