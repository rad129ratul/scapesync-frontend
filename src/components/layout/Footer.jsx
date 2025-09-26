const Footer = () => {
  return (
    <footer style={{background: 'linear-gradient(135deg, #1f2937 0%, #111827 50%, #0f172a 100%)', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'absolute', top: '50%', right: '10%', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', transform: 'translateY(-50%)'}}></div>
      <div style={{position: 'absolute', top: '20%', right: '20%', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(59, 130, 246, 0.08)'}}></div>
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '80px 32px', position: 'relative', zIndex: 10}}>
        <div style={{display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px', alignItems: 'center'}}>
          {/* Brand Section */}
          <div>
            <div style={{display: 'flex', alignItems: 'center', marginBottom: '32px'}}>
              <img src="/images/Vector-1.png" alt="ScapeSync" style={{height: '40px', width: 'auto', filter: 'brightness(0) invert(1)'}} />
            </div>
            <p style={{color: '#d1d5db', maxWidth: '500px', fontSize: '18px', marginBottom: '40px', lineHeight: '1.7'}}>
              Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.
            </p>
            
            {/* App Store Buttons */}
            <div style={{display: 'flex', gap: '16px', marginBottom: '40px'}}>
              <a 
                href="#" 
                style={{display: 'inline-block', transition: 'transform 0.2s ease'}}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                aria-label="Download on App Store"
              >
                <img 
                  src="/images/Store download button.png" 
                  alt="Download on App Store" 
                  style={{height: '56px', width: 'auto'}}
                />
              </a>
              <a 
                href="#" 
                style={{display: 'inline-block', transition: 'transform 0.2s ease'}}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                aria-label="Get it on Google Play"
              >
                <img 
                  src="/images/Store download button-1.png" 
                  alt="Get it on Google Play" 
                  style={{height: '56px', width: 'auto'}}
                />
              </a>
            </div>
          </div>
        </div>
        {/* Social Media Icons */}
        <div>
          <div style={{display: 'flex', gap: '24px', marginBottom: '32px'}}>
            <a href="#" style={{color: '#9ca3af', transition: 'color 0.2s ease'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" style={{color: '#9ca3af', transition: 'color 0.2s ease'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 01-1.93.07 4.28 4.28 0 004 2.98 8.521 8.521 0 01-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </a>
            <a href="#" style={{color: '#9ca3af', transition: 'color 0.2s ease'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <a href="#" style={{color: '#9ca3af', transition: 'color 0.2s ease'}} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9ca3af'}>
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.402-.09.394-.29 1.199-.333 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>
          
          <p style={{color: '#6b7280', fontSize: '14px', textAlign: 'center'}}>
            © 2021-2025, ScapeSync. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer