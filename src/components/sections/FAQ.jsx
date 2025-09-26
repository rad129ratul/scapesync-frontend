import { useState, useEffect, useRef } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)
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

  const faqs = [
    {
      question: "Is the app free to use?",
      answer: "Yes, ScapeSync is free to download and use for basic features. We offer premium plans with advanced features for growing businesses that need additional functionality and support."
    },
    {
      question: "Can I assign multiple employees on one job?",
      answer: "Absolutely! ScapeSync allows you to assign multiple team members to a single job. You can track individual contributions, manage schedules, and coordinate team activities all from one central dashboard."
    },
    {
      question: "Does it work on both mobile and desktop?",
      answer: "Yes, ScapeSync is designed to work seamlessly across all devices. Our responsive web app works on desktop browsers, and we have dedicated mobile apps for both iOS and Android devices."
    },
    {
      question: "Is GPS tracking always on?",
      answer: "GPS tracking is only active when you're on duty and have opted in. You have full control over location sharing and can turn it off anytime. We respect your privacy and only use location data to improve job coordination and customer service."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="section-spacing bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Got questions? We've got the answers you're looking for.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`faq-item transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="faq-button"
              >
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                
                <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openIndex === index ? 'bg-green-500 rotate-180' : 'bg-gray-100'}`}>
                  <svg width="25" height="25"
                    className={` transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-green-500'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 pt-2">
                  <div className="w-full h-px bg-gray-100 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@scapesync.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors duration-200"
              >
                <svg width="25" height="25" className="mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-medium border border-gray-300 rounded-lg transition-colors duration-200"
              >
                <svg width="25" height="25" className="mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Live Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ