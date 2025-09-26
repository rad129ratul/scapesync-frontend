import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import Header from '../src/components/layout/Header'
import Hero from '../src/components/sections/Hero'
import Features from '../src/components/sections/Features'
import BuildForEveryone from '../src/components/sections/BuildForEveryone'
import Testimonials from '../src/components/sections/Testimonials'
import FAQ from '../src/components/sections/FAQ'
import Footer from '../src/components/layout/Footer'

export default function Home() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <BuildForEveryone />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}