import { createContext, useContext, useState, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => {
    const context = useContext(AccessibilityContext);
    if (!context) {
        throw new Error('useAccessibility must be used within AccessibilityProvider');
    }
    return context;
};

export const AccessibilityProvider = ({ children }) => {
    const [isDyslexiaFont, setIsDyslexiaFont] = useState(() => {
        // Load preference from localStorage
        const saved = localStorage.getItem('dyslexiaFont');
        return saved === 'true';
    });

    const toggleDyslexiaFont = () => {
        setIsDyslexiaFont((prev) => {
            const newValue = !prev;
            localStorage.setItem('dyslexiaFont', newValue);
            return newValue;
        });
    };

    useEffect(() => {
        // Apply or remove dyslexia font class to document
        if (isDyslexiaFont) {
            document.documentElement.classList.add('font-dyslexic');
        } else {
            document.documentElement.classList.remove('font-dyslexic');
        }
    }, [isDyslexiaFont]);

    return (
        <AccessibilityContext.Provider value={{ isDyslexiaFont, toggleDyslexiaFont }}>
            {children}
        </AccessibilityContext.Provider>
    );
};
