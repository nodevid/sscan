import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">S</span>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Scan</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Home
            </Link>
            <Link to="/scan" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Scan
            </Link>
            <Link to="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
