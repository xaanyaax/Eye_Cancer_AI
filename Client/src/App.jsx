// App.js - Main application file
import React from 'react';
import Navbar from './components/Navbar.jsx';
import { ThemeProvider } from './contexts/theme.js';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        
        {/* Your main content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 transition-colors duration-300">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Welcome to Your App
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This is an example of how the theme system works throughout your entire application.
              Click the theme toggle button in the navbar to switch between light and dark modes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Home Section
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Your homepage content goes here.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  About Section
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Information about your company or project.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Contact Section
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get in touch with us here.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;