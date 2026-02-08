

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

function handleSOS() {
    
    alert('🚨 Emergency services contacted! Help is on the way.');
}

document.addEventListener('DOMContentLoaded', function () {
    
    const dyslexiaPreference = localStorage.getItem('dyslexiaFont');
    const toggle = document.getElementById('dyslexiaToggle');

    if (dyslexiaPreference === 'true') {
        toggle.checked = true;
        document.body.classList.add('dyslexia-font');
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeSidebar();
        }
    });

    console.log('Dashboard loaded');
});
