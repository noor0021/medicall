# MediCall - Vanilla HTML/CSS/JS Version

A modern, accessibility-focused Medical App built with pure HTML, CSS, and JavaScript.

## 📁 Project Structure

```
vanilla-app/
├── index.html          # Get Started landing page
├── login.html          # Login/Signup page
├── dashboard.html      # Main dashboard
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── login.js        # Login page functionality
│   └── dashboard.js    # Dashboard functionality
└── images/
    ├── hero-illustration.png
    └── avatar.png
```

## 🚀 How to Run

Simply open `index.html` in a web browser. No build process or dependencies required!

### Option 1: Direct File Open
1. Navigate to `vanilla-app` folder
2. Double-click `index.html`

### Option 2: Local Web Server (Recommended)
```bash
cd vanilla-app
python3 -m http.server 8000
```
Then open http://localhost:8000 in your browser.

## ✨ Features

### Pages
1. **Get Started (index.html)** - Landing page with hero illustration
2. **Login (login.html)** - Authentication with login/signup toggle
3. **Dashboard (dashboard.html)** - Main app hub with all features

### Dashboard Components
- **Header** with user avatar and language toggle
- **Slide-out Sidebar** with menu and settings
- **Dyslexia Font Toggle** with localStorage persistence
- **Health ID Cards** (Aadhaar & Ayushman Bharat) with horizontal scroll
- **Medicine Tracker** with progress bar
- **Bottom Navigation** with Home, Camera FAB, and pulsing SOS button

### Accessibility
- ✓ Dyslexia-friendly font toggle (OpenDyslexic)
- ✓ Semantic HTML
- ✓ ARIA labels
- ✓ Keyboard navigation (Escape to close sidebar)
- ✓ Focus indicators
- ✓ LocalStorage for preference persistence

### Design
- ✓ Mint green and white color scheme
- ✓ 20px rounded corners on cards
- ✓ Soft shadows throughout
- ✓ Visual-first with emoji icons as fallback
- ✓ Smooth animations and transitions
- ✓ Responsive design

## 🎨 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
  --color-mint-500: #A3D9A5;
  --color-deep-black: #0F172A;
  --color-danger-red: #EF4444;
}
```

### Content
- Edit HTML files directly to change text, add/remove sections
- Modify medicine list in `dashboard.html`
- Update user info in sidebar

## 🔧 JavaScript Functionality

### login.js
- `toggleAuthMode()` - Switches between login and signup
- `handleSubmit()` - Form submission handler

### dashboard.js
- `openSidebar()` / `closeSidebar()` - Sidebar controls
- `toggleDyslexiaFont()` - Font accessibility toggle
- `handleSOS()` - Emergency button handler
- LocalStorage integration for preferences

## 📱 Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 🎯 Key Differences from React Version

1. **No Build Process** - Pure HTML/CSS/JS, ready to use
2. **Icon Fallback** - Uses emoji instead of Lucide React icons
3. **Manual DOM Manipulation** - JavaScript instead of React state
4. **Multiple HTML Files** - Separate pages instead of client-side routing
5. **LocalStorage Direct** - No Context API, direct localStorage usage

## 💡 Tips

- Icons use emoji fallback (🏠, 📷, ⚠️, etc.) for simplicity
- For production, consider using icon font libraries like Font Awesome
- Add real form validation before deploying
- Implement actual backend API calls for authentication
- Consider adding service workers for offline support

## 📄 License

Free to use for educational and personal projects.
