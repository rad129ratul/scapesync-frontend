import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import Button from '../src/components/ui/Button'

const PasswordChangedSuccess = () => {
  const router = useRouter()

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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Password Changed Successfully!
            </h2>
            
            <p className="text-gray-600 mb-8">
              Your password has been updated successfully. You can now login with your new password.
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
        </div>
      </div>
    </div>
  )
}

export default function PasswordChangedSuccessPage() {
  return (
    <Provider store={store}>
      <PasswordChangedSuccess />
    </Provider>
  )
}