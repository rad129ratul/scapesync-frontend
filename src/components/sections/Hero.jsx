import { useState, useEffect } from 'react'
import Button from '../ui/Button'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-text-content">
              <h1 className="hero-title">
                All Your Jobs
                <br />
                <span className="hero-title-highlight">One Smart App</span>
              </h1>
              
              <p className="hero-description">
                The all-in-one landscaping app that help you book services, track job progress and manage your workload with ease.
              </p>
            </div>

            <div className="hero-buttons">
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <img src="/images/Store download button.png" alt="Download on App Store" />
                </a>
                <a href="#" className="app-button">
                  <img src="/images/Store download button-1.png" alt="Get it on Google Play" />
                </a>
              </div>
            </div>

            <div className="get-started-section">
              <Button 
                variant="primary"
                onClick={() => window.location.href = '/register'}
                className="get-started-btn"
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="hero-image">
            <div className="phone-container">
              <img src="/images/All Your Jobs One Smart App.png" alt="ScapeSync Mobile App Interface" className="phone-mockup-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero