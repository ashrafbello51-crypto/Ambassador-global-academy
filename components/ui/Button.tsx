import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gold' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}: ButtonProps) {
  const variants = {
    primary: 'bg-navy-900 text-white hover:bg-navy-800 shadow-soft hover:shadow-elevated hover:-translate-y-0.5',
    secondary: 'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white shadow-soft hover:shadow-elevated hover:-translate-y-0.5',
    gold: 'bg-gold-500 text-white hover:bg-gold-600 shadow-soft hover:shadow-elevated hover:-translate-y-0.5',
    ghost: 'text-navy-700 hover:text-gold-500 hover:bg-navy-50',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl',
  }

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-navy-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}