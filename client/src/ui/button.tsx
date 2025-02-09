import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "gradient" | "ghost"
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  loading?: boolean
  icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = "default", 
  size = "md",
  fullWidth = false,
  loading = false,
  icon,
  className = "",
  disabled,
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }

  const variantClasses = {
    default: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 active:transform active:scale-95",
    outline: "bg-transparent border-2 border-green-500 text-green-500 hover:bg-green-500/10 focus:ring-green-500",
    gradient: "bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-400 hover:to-emerald-500 focus:ring-green-500 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 active:transform active:scale-95",
    ghost: "bg-transparent text-green-500 hover:bg-green-500/10 focus:ring-green-500"
  }

  const widthClass = fullWidth ? "w-full" : ""

  const loadingSpinner = (
    <svg 
      className="animate-spin -ml-1 mr-2 h-4 w-4" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  )

  return (
    <button 
      className={`
        ${baseClasses} 
        ${sizeClasses[size]} 
        ${variantClasses[variant]}
        ${widthClass}
        ${className}
      `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && loadingSpinner}
      {!loading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )
}

// Example usage with dealership page buttons:
export const DealershipButtons = () => {
  return (
    <div className="space-y-4">
      {/* Primary CTA */}
      <Button 
        variant="gradient" 
        size="lg" 
        fullWidth
      >
        Apply for Dealership
      </Button>

      {/* Secondary action */}
      <Button 
        variant="outline" 
        size="lg" 
        fullWidth
      >
        Learn More
      </Button>

      {/* Smaller button with icon */}
      <Button 
        variant="ghost" 
        size="md" 
        icon={<span className="w-4 h-4">→</span>}
      >
        View Requirements
      </Button>

      {/* Loading state */}
      <Button 
        variant="default" 
        size="md" 
        loading
      >
        Submitting Application
      </Button>
    </div>
  )
}