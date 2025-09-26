const Spinner = ({ 
  size = 'md', 
  color = 'green', 
  className = '',
  text = null 
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const colorClasses = {
    green: 'border-green-500',
    white: 'border-white',
    gray: 'border-gray-500'
  }

  const spinnerClass = `
    ${sizeClasses[size]}
    border-2
    ${colorClasses[color]}
    border-t-transparent
    rounded-full
    animate-spin
    ${className}
  `

  return (
    <div className="flex flex-col items-center justify-center">
      <div className={spinnerClass}></div>
      {text && (
        <p className="mt-2 text-sm text-gray-600">{text}</p>
      )}
    </div>
  )
}

export const ButtonSpinner = ({ size = 'sm' }) => (
  <Spinner 
    size={size} 
    color="white" 
    className="mr-2" 
  />
)

export const PageSpinner = () => (
  <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
    <Spinner 
      size="xl" 
      color="green"
      text="Loading..." 
    />
  </div>
)

export default Spinner