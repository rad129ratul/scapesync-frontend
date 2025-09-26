import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
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
    <header style={{backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 50, borderBottom: '1px solid #e5e7eb'}}>
      <div className="container-custom">
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', maxWidth: '1280px', margin: '0 auto', padding: '0 2rem'}}>
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/images/image 7.png" alt="ScapeSync" style={{height: '32px', width: 'auto'}} />
            </a>
          </div>
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
                <button 
                  onClick={() => window.location.href = '/login'}
                  style={{
                    backgroundColor: '#10b981',
                    color: 'white',
                    padding: '12px 24px',
                    borderRadius: '8px',
                    border: 'none',
                    fontWeight: '600',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor='#059669'}
                  onMouseLeave={(e) => e.target.style.backgroundColor='#10b981'}
                >
                  Get Started
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header