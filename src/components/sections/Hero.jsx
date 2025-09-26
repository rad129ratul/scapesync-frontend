import { useState, useEffect } from 'react'
import Button from '../ui/Button'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white min-h-screen flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                All Your Jobs
                <br />
                <span className="text-green-500">One Smart App</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                The all-in-one landscaping app that help you book services, track job progress and manage your workload with ease.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href="#" 
                  className="inline-block transition-transform duration-200 hover:scale-105"
                  aria-label="Download on App Store"
                >
                  <img 
                    src="/images/Store download button.png" 
                    alt="Download on App Store" 
                    className="h-14 w-auto"
                  />
                </a>
                <a 
                  href="#" 
                  className="inline-block transition-transform duration-200 hover:scale-105"
                  aria-label="Get it on Google Play"
                >
                  <img 
                    src="/images/Store download button-1.png" 
                    alt="Get it on Google Play" 
                    className="h-14 w-auto"
                  />
                </a>
              </div>
            </div>

            <div className="pt-4">
              <Button 
                variant="primary"
                onClick={() => window.location.href = '/register'}
                className="w-auto px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className={`relative flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-20 blur-2xl animate-pulse"></div>
              
              <div className="relative">
                <img 
                  src="/images/All Your Jobs One Smart App.png" 
                  alt="ScapeSync Mobile App Interface" 
                  className="w-80 md:w-96 lg:w-[400px] h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce shadow-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white animate-pulse shadow-lg">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-1 h-1 bg-yellow-400 rounded-full animate-ping"></div>
    </section>
  )
}

export default Hero