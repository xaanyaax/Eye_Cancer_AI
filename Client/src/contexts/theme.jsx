// // theme.js
// import { useState, useEffect } from 'react';

// // Custom hook for theme management
// export const useTheme = () => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     // Check if user has a saved preference
//     const savedTheme = localStorage.getItem('theme');
//     const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
//     const initialTheme = savedTheme || systemTheme;
//     setTheme(initialTheme);
    
//     // Apply theme to document
//     if (initialTheme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
    
//     // Save to localStorage
//     localStorage.setItem('theme', newTheme);
    
//     // Apply to document
//     if (newTheme === 'dark') {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   };

//   return { theme, toggleTheme };
// };

// // Theme Provider Component
// export const ThemeProvider = ({ children }) => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div className={`min-h-screen transition-colors duration-300 ${
//       theme === 'dark' 
//         ? 'bg-gray-900 text-white' 
//         : 'bg-white text-gray-900'
//     }`}>
//       {children}
//     </div>
//   );
// };

// // Theme Context (alternative approach)
// import { createContext, useContext } from 'react';

// const ThemeContext = createContext();

// export const ThemeContextProvider = ({ children }) => {
//   const themeValue = useTheme();
  
//   return (
//     <ThemeContext.Provider value={themeValue}>
//       <div className={`min-h-screen transition-colors duration-300 ${
//         themeValue.theme === 'dark' 
//           ? 'bg-gray-900 text-white' 
//           : 'bg-white text-gray-900'
//       }`}>
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export const useThemeContext = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useThemeContext must be used within a ThemeContextProvider');
//   }
//   return context;
// };