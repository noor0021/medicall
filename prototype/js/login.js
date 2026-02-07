// Login/Signup Page JavaScript

let isSignup = false;

// Toggle between Login and Signup modes
function toggleAuthMode() {
    isSignup = !isSignup;

    const nameGroup = document.getElementById('nameGroup');
    const authTitle = document.getElementById('authTitle');
    const authSubtitle = document.getElementById('authSubtitle');
    const toggleButton = document.getElementById('toggleButton');
    const nameInput = document.getElementById('name');

    if (isSignup) {
        // Switch to Signup mode
        nameGroup.classList.remove('hidden');
        nameInput.required = true;
        authTitle.textContent = 'Create Account';
        authSubtitle.textContent = 'Join us to manage your health';
        toggleButton.textContent = 'Already have an account? Sign In';
    } else {
        // Switch to Login mode
        nameGroup.classList.add('hidden');
        nameInput.required = false;
        authTitle.textContent = 'Welcome Back';
        authSubtitle.textContent = 'Sign in to continue';
        toggleButton.textContent = "Don't have an account? Sign Up";
    }
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();

    // In a real app, this would handle authentication
    // For now, just navigate to the dashboard
    window.location.href = 'dashboard.html';
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    console.log('Login page loaded');
});
