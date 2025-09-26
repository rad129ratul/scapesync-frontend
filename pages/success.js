import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { store } from '../src/store/store'
import Button from '../src/components/ui/Button'

const SuccessPage = () => {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex items-center justify-start p-6">
        <img 
          src="/images/Vector-1.png" 
          alt="ScapeSync" 
          className="h-10 w-auto"
        />
        <span className="ml-3 text-2xl font-semibold text-gray-900">
          ScapeSync
        </span>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="mb-8">
            <div className="w-64 h-64 mx-auto mb-6 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 300 300" fill="none">
                <g transform="translate(150,150)">
                  <g className="animate-pulse">
                    <path d="M0,-80 L15,-65 L30,-75 L20,-50 L35,-40 L15,-25 L25,-10 L5,-5 L10,10 L-5,5 L-10,25 L-25,10 L-35,40 L-20,50 L-30,75 L-15,65 L0,80 L-15,65 L-30,75 L-20,50 L-35,40 L-15,25 L-25,10 L-5,5 L-10,-10 L5,-5 L10,-25 L25,-10 L35,-40 L20,-50 L30,-75 L15,-65 L0,-80" 
                          fill="#10B981" fillOpacity="0.3"/>
                    <path d="M0,-60 L12,-48 L24,-56 L16,-38 L28,-30 L12,-19 L20,-8 L4,-4 L8,8 L-4,4 L-8,20 L-20,8 L-28,30 L-16,38 L-24,56 L-12,48 L0,60 L-12,48 L-24,56 L-16,38 L-28,30 L-12,19 L-20,8 L-4,4 L-8,-8 L4,-4 L8,-20 L20,-8 L28,-30 L16,-38 L24,-56 L12,-48 L0,-60" 
                          fill="#34D399" fillOpacity="0.5"/>
                    <path d="M0,-40 L8,-32 L16,-37 L11,-25 L19,-20 L8,-13 L13,-5 L3,-3 L5,5 L-3,3 L-5,13 L-13,5 L-19,20 L-11,25 L-16,37 L-8,32 L0,40 L-8,32 L-16,37 L-11,25 L-19,20 L-8,13 L-13,5 L-3,3 L-5,-5 L3,-3 L5,-13 L13,-5 L19,-20 L11,-25 L16,-37 L8,-32 L0,-40" 
                          fill="#10B981"/>
                  </g>
                  
                  <g className="animate-bounce" style={{animationDelay: '0.5s'}}>
                    <circle cx="20" cy="-30" r="3" fill="#FDE047"/>
                    <circle cx="-25" cy="15" r="2" fill="#60A5FA"/>
                    <circle cx="30" cy="20" r="2.5" fill="#34D399"/>
                    <circle cx="-20" cy="-25" r="2" fill="#F472B6"/>
                    <circle cx="10" cy="35" r="1.5" fill="#FBBF24"/>
                    <circle cx="-30" cy="-10" r="2" fill="#A78BFA"/>
                  </g>
                  
                  <g className="animate-pulse" style={{animationDelay: '1s'}}>
                    <path d="M-10,-5 L10,-5 L15,0 L10,5 L-10,5 L-15,0 Z" fill="#FBBF24"/>
                    <path d="M-8,-3 L8,-3 L12,0 L8,3 L-8,3 L-12,0 Z" fill="#FDE047"/>
                    <circle cx="15" cy="-10" r="1.5" fill="#60A5FA"/>
                    <circle cx="-15" cy="10" r="1" fill="#F472B6"/>
                  </g>
                </g>
              </svg>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Account Created Successfully!
            </h2>
            
            <p className="text-gray-600 mb-8">
              Your account is set up! Just verify your email to get started.
            </p>
          </div>

          <Button
            type="button"
            variant="primary"
            onClick={() => router.push('/')}
            className="w-full mb-4"
          >
            Go To Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function Success() {
  return (
    <Provider store={store}>
      <SuccessPage />
    </Provider>
  )
}