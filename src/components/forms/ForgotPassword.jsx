import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { authAPI } from '../../services/api'
import Button from '../ui/Button'
import Input from '../ui/Input'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const router = useRouter()

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email) {
      setError('Email is required')
      return
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      await authAPI.forgotPassword(email)
      setSuccess(true)
    } catch (error) {
      setError(error.response?.data?.message || 'Failed to send reset email')
    } finally {
      setLoading(false)
    }
  }

  const handleBack = () => {
    router.back()
  }

  if (success) {
    return (
      <div className="min-h-screen bg-white flex flex-col">
        <div className="flex items-center justify-start p-6">
          <img 
            src="/images/Vector-1.png" 
            alt="ScapeSync" 
            className="h-10 w-auto"
          />
          <span className="ml-3 text-2xl font-semibold text-gray-900">
            ScapeSync
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 flex items-center justify-center bg-green-100 rounded-full">
                <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Check your email!
              </h2>
              
              <p className="text-gray-600 mb-8">
                We've sent a password reset link to {email}. Please check your email and follow the instructions to reset your password.
              </p>
            </div>

            <Button
              type="button"
              variant="primary"
              onClick={() => router.push('/login')}
              className="w-full mb-4"
            >
              Back to Login
            </Button>

            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="text-green-500 hover:text-green-600 font-medium"
            >
              Try different email
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex items-center justify-start p-6">
        <img 
          src="/images/Vector-1.png" 
          alt="ScapeSync" 
          className="h-10 w-auto"
        />
        <span className="ml-3 text-2xl font-semibold text-gray-900">
          ScapeSync
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <button
              onClick={handleBack}
              className="flex items-center text-green-500 hover:text-green-600 font-medium mb-8 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>

            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Forgot your password?
              </h2>
              <p className="text-gray-600">
                Please enter the email address associated with your account, and we'll email you a link to reset your password.
              </p>
            </div>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <Input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              error={error}
              required
            />

            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Sending...' : 'Reset Password'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword