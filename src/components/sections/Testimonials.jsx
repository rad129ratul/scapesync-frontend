import { useState, useEffect, useRef } from 'react'

const Testimonials = () => {
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

  const testimonials = [
    {
      name: "Farrukhk",
      role: "Landscape Designer",
      image: "/images/Frame 781.png",
      rating: 5,
      content: "This product streamlined my work! Now I can efficiently manage multiple projects, track their progress, and deliver better results for my clients. Highly recommend!"
    },
    {
      name: "Ahmad K.",
      role: "Business Owner",
      image: "/images/Frame 781-1.png", 
      rating: 5,
      content: "Game changer for my team and me! The mobile app has everything I need to run my landscaping business more efficiently. Love the real-time updates!"
    },
    {
      name: "Farrukhk",
      role: "Landscape Designer", 
      image: "/images/Frame 781-2.png",
      rating: 5,
      content: "So helpful in finding work! Now I can easily connect with clients, showcase my portfolio, and get hired for quality landscaping projects. Amazing platform!"
    }
  ]

  return (
    <section ref={sectionRef} className="section-spacing section-bg-gray">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            What Our Users Are Saying
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Discover why thousands of landscaping professionals trust ScapeSync to grow their business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`testimonial-card transition-all duration-500 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-white" />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg width="25" height="25" className="text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg group-hover:text-green-600 transition-colors duration-300">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  
                  <div className="flex items-center mt-2 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} width="25" height="25" className="text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <svg width="25" height="25" className="absolute -top-2 -left-1 text-gray-200 opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6s2.7 6 6 6h4v6H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h2v-2zM24 8c-3.3 0-6 2.7-6 6s2.7 6 6 6h4v6h-6c-4.4 0-8-3.6-8-8s3.6-8 8-8h2v-2z"/>
                </svg>
                
                <p className="text-gray-700 leading-relaxed pl-6 group-hover:text-gray-900 transition-colors duration-300">
                  {testimonial.content}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Verified Review</span>
                  <span className="flex items-center space-x-1">
                    <svg width="25" height="25" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                {testimonials.slice(0, 3).map((testimonial, index) => (
                  <img 
                    key={index}
                    src={testimonial.image} 
                    alt=""
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span className="font-medium">10,000+ Happy Users</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="25" height="25" className="text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-medium">4.9/5 Average Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials