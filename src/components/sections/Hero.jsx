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
          <div className="hero-image">
            <div className="phone-container">
              <img src="/images/Frame 2147227443.png" alt="ScapeSync Mobile App Interface" className="phone-mockup-img" />
            </div>
          </div>
              <div className="app-buttons">
                <a href="#" className="app-button">
                  <img src="/images/Store download button.png" alt="Download on App Store" />
                </a>
                <a href="#" className="app-button">
                  <img src="/images/Store download button-1.png" alt="Get it on Google Play" />
                </a>
              </div>
        </div>
      </div>
    </section>
  )
}

export default Hero