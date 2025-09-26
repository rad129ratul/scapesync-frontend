import { useState, useEffect, useRef } from 'react'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: (
        <div width="25" height="25" className="bg-green-50 rounded-xl flex items-center justify-center">
          <svg width="25" height="25" className="text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
      ),
      title: "Easy Service Booking",
      description: "Streamlined booking process for clients with service catalogs and availability."
    },
    {
      icon: (
        <div width="25" height="25" className="bg-blue-100 rounded-xl flex items-center justify-center">
          <svg width="25" height="25" className="text-blue-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      ),
      title: "Real Time Tracking",
      description: "Monitor job progress, employee hours, and project timelines with live updates."
    },
    {
      icon: (
        <div width="25" height="25" className="bg-purple-100 rounded-xl flex items-center justify-center">
          <svg width="25" height="25" className="text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
      ),
      title: "Performance Analytics",
      description: "Comprehensive reporting and insights to improve business operations and efficiency."
    },
    {
      icon: (
        <div width="25" height="25" className="bg-orange-100 rounded-xl flex items-center justify-center">
          <svg width="25" height="25" className="text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
      ),
      title: "Secure & Reliable",
      description: "Your data is protected with enterprise-grade security. Reliable service with 99.9% uptime and secure payment processing."
    }
  ]

  return (
    <section ref={sectionRef} className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">
            Why Choose ScapeSync?
          </h2>
          <p className="features-description">
            Everything you need to manage your landscaping business efficiently. From booking to completion, we've got you covered.
          </p>
        </div>

        <div className="features-grid grid grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-item flex flex-col items-center text-center p-6"
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              
              <h3 className="feature-title">
                {feature.title}
              </h3>
              
              <p className="feature-desc">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features