import React from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
