interface SectionTitleProps {
  label?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {label && (
        <span className={`section-label ${light ? 'text-gold-400' : 'text-gold-500'}`}>
          {label}
        </span>
      )}
      <h2 className={`section-title ${light ? 'text-white' : 'text-navy-900'} ${label ? 'mt-2' : ''}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${centered ? 'mx-auto' : ''} ${light ? 'text-navy-300' : 'text-navy-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
