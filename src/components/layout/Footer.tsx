import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-blue-600">S</span>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Scan</span>
            </Link>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              Free website security scanner for everyone.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/scan" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Scan Website
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
              Legal
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} SScan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
