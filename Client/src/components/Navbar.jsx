export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div>
          <img src='https://i.postimg.cc/LsS6T9Rf/iit-mandi.png' border='0' alt='iit-mandi' className="w-27 h-16 mr-2"/>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="#home" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Home
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            About
          </a>
          <a 
            href="#about" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Right Side - Theme Toggle & Profile */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle Icon */}
          <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <svg 
              className="w-5 h-5 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" 
              />
            </svg>
          </button>

          {/* Profile Icon */}
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
            <svg 
              className="w-6 h-6 text-gray-600" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (hidden by default) */}
      <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
        <div className="flex flex-col space-y-3">
          <a 
            href="#home" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1"
          >
            Home
          </a>
          <a 
            href="#contact" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1"
          >
            Contact
          </a>
          <a 
            href="#about" 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1"
          >
            About
          </a>
        </div>
      </div>
    </nav>
  );
}

        