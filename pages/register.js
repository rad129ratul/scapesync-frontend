import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import RegisterForm from '../src/components/forms/RegisterForm'

export default function Register() {
  return (
    <Provider store={store}>
      <RegisterForm />
    </Provider>
  )
}