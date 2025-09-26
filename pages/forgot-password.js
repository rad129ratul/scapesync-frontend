import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import ForgotPassword from '../src/components/forms/ForgotPassword'

export default function ForgotPasswordPage() {
  return (
    <Provider store={store}>
      <ForgotPassword />
    </Provider>
  )
}