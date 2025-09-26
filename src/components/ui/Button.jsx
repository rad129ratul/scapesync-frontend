const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClass = 'w-full py-3 px-6 rounded-lg font-medium text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-green-500 hover:bg-green-600 text-white focus:ring-green-500 active:bg-green-700',
    secondary: 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-500',
    google: 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 focus:ring-gray-500 flex items-center justify-center gap-3',
    link: 'bg-transparent hover:underline text-green-500 p-0 w-auto font-medium'
  }

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : ''

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variants[variant]} ${disabledClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button