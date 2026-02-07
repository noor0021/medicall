// Dashboard JavaScript

// Sidebar Functions
function openSidebar() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');

    sidebar.classList.add('open');
    backdrop.classList.remove('hidden');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebarBackdrop');

    sidebar.classList.remove('open');
    backdrop.classList.add('hidden');
}

// Dyslexia Font Toggle
function toggleDyslexiaFont() {
    const toggle = document.getElementById('dyslexiaToggle');
    const body = document.body;

    if (toggle.checked) {
        body.classList.add('dyslexia-font');
        localStorage.setItem('dyslexiaFont', 'true');
    } else {
        body.classList.remove('dyslexia-font');
        localStorage.setItem('dyslexiaFont', 'false');
    }
}

// SOS Button Handler
function handleSOS() {
    // In a real app, this would trigger emergency services
    alert('🚨 Emergency services contacted! Help is on the way.');
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // Load dyslexia font preference from localStorage
    const dyslexiaPreference = localStorage.getItem('dyslexiaFont');
    const toggle = document.getElementById('dyslexiaToggle');

    if (dyslexiaPreference === 'true') {
        toggle.checked = true;
        document.body.classList.add('dyslexia-font');
    }

    // Close sidebar when pressing Escape key
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeSidebar();
        }
    });

    console.log('Dashboard loaded');
});
