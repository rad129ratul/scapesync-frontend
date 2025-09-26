import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import { toggleMobileMenu } from '../../store/uiSlice'
import Button from '../ui/Button'

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth)
  const { showMobileMenu } = useSelector((state) => state.ui)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    window.location.href = '/login'
  }

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img 
                src="/images/Vector-1.png" 
                alt="ScapeSync" 
                className="h-8 w-auto"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                ScapeSync
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Welcome, {user?.firstName || 'User'}
                </span>
                <Button 
                  variant="secondary" 
                  onClick={handleLogout}
                  className="w-auto px-4 py-2"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <>
                <a 
                  href="/login" 
                  className="text-green-500 hover:text-green-600 font-medium transition-colors"
                >
                  Log in
                </a>
                <Button 
                  variant="primary"
                  onClick={() => window.location.href = '/register'}
                  className="w-auto px-6 py-2"
                >
                  Get Started
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {showMobileMenu ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
              >
                Contact
              </a>
            </div>
            
            <div className="pt-4 pb-3 border-t border-gray-100">
              {isAuthenticated ? (
                <div className="px-2 space-y-1">
                  <div className="px-3 py-2 text-gray-700">
                    Welcome, {user?.firstName || 'User'}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="px-2 space-y-1">
                  <a
                    href="/login"
                    className="block px-3 py-2 text-green-500 hover:text-green-600 rounded-md transition-colors"
                  >
                    Log in
                  </a>
                  <a
                    href="/register"
                    className="block px-3 py-2 bg-green-500 text-white hover:bg-green-600 rounded-md transition-colors"
                  >
                    Get Started
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header