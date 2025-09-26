import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import '../src/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}