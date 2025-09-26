import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { loginStart, loginSuccess, loginFailure } from '../../store/authSlice'
import { authAPI } from '../../services/api'
import Button from '../ui/Button'
import Input from '../ui/Input'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()
  const router = useRouter()
  const { loading, error } = useSelector((state) => state.auth)

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return

    dispatch(loginStart())
    
    try {
      const response = await authAPI.login(formData)
      const { token, user } = response.data
      
      if (rememberMe) {
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
      }
      
      dispatch(loginSuccess({ token, user }))
      router.push('/')
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || 'Login failed'))
    }
  }

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_API_URL}/auth/google`
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to ScapeSync
            </h2>
            <p className="text-gray-600">
              Please share your login details so you can access the website.
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <Input
                label="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="eddie_lake@gmail.com"
                error={errors.email}
                required
              />

              <Input
                label="Password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                error={errors.password}
                showPasswordToggle
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-green-500"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <a 
                href="/forgot-password" 
                className="text-sm text-green-500 hover:text-green-600 font-medium"
              >
                Forgot password?
              </a>
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
              {loading ? 'Logging in...' : 'Login'}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">OR</span>
              </div>
            </div>

            <Button
              type="button"
              variant="google"
              onClick={handleGoogleLogin}
              className="w-full"
            >
              <img 
                src="/images/ic_google.png" 
                alt="Google" 
                className="w-5 h-5"
              />
              Log in with Google
            </Button>

            <div className="text-center">
              <span className="text-gray-600">Don't have an account? </span>
              <a 
                href="/register" 
                className="text-green-500 hover:text-green-600 font-medium"
              >
                Get started
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm