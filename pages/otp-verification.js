import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import OTPInput from '../src/components/forms/OTPInput'

export default function OTPVerification() {
  return (
    <Provider store={store}>
      <OTPInput />
    </Provider>
  )
}