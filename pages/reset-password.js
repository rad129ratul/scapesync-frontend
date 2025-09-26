import { useState } from 'react'
import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import Button from '../src/components/ui/Button'
import Input from '../src/components/ui/Input'

const ResetPasswordForm = () => {
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!formData.newPassword) {
      setError('New password is required')
      return
    }
    
    if (formData.newPassword.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }
    
    if (formData.newPassword !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    setError('')
    
    try {
      router.push('/password-changed-success')
    } catch (error) {
      setError('Failed to update password')
    } finally {
      setLoading(false)
    }
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
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Enter your new password.
            </h2>
            <p className="text-gray-600">
              Please enter the email address associated with your account, and we will email you a link to reset your password.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                name="newPassword"
                type="password"
                value={formData.newPassword}
                onChange={handleInputChange}
                placeholder="New password"
                showPasswordToggle
                required
              />

              <Input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm password"
                showPasswordToggle
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <div className="flex">
                  <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              disabled={loading}
              className="w-full"
            >
              {loading ? 'Updating...' : 'Update Password'}
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => router.back()}
                className="text-green-500 hover:text-green-600 font-medium"
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function ResetPassword() {
  return (
    <Provider store={store}>
      <ResetPasswordForm />
    </Provider>
  )
}