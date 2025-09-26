import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import LoginForm from '../src/components/forms/LoginForm'

export default function Login() {
  return (
    <Provider store={store}>
      <LoginForm />
    </Provider>
  )
}