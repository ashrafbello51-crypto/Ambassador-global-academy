import { cn } from './Button'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  hover?: boolean
}

export function Card({ children, hover = false, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl overflow-hidden',
        hover && 'hover:-translate-y-1 hover:shadow-elevated transition-all duration-500',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface CardImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string
}

export function CardImage({ alt, className, ...props }: CardImageProps) {
  return (
    <div className="overflow-hidden aspect-video">
      <img
        className={cn('w-full h-full object-cover transition-transform duration-700 hover:scale-105', className)}
        alt={alt}
        {...props}
      />
    </div>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export function CardContent({ children, className, ...props }: CardContentProps) {
  return (
    <div className={cn('p-6 md:p-8', className)} {...props}>
      {children}
    </div>
  )
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export function CardTitle({ children, className, ...props }: CardTitleProps) {
  return (
    <h3 className={cn('text-xl font-heading font-semibold text-navy-900 mb-2', className)} {...props}>
      {children}
    </h3>
  )
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export function CardDescription({ children, className, ...props }: CardDescriptionProps) {
  return (
    <p className={cn('text-navy-500 leading-relaxed', className)} {...props}>
      {children}
    </p>
  )
}