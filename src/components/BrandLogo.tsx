type BrandLogoProps = {
  className?: string
  iconClassName?: string
  textClassName?: string
}

export default function BrandLogo({
  className = '',
  iconClassName = 'w-8 h-8',
  textClassName = 'text-xl',
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className={`${iconClassName} rounded-md bg-accent/10 border border-accent/30 flex items-center justify-center`}>
        <svg
          viewBox="0 0 32 32"
          className="w-5 h-5 text-accent"
          aria-hidden="true"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8 7.5h3v17H8v-17z" fill="currentColor" />
          <path d="M14.5 9.5h6a5 5 0 0 1 0 10h-6v-10z" stroke="currentColor" strokeWidth="2.2" />
          <path d="m20.6 18.8 3.4 4.2" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      </span>
      <span className={`${textClassName} font-bold tracking-tight`}>
        IQEX<span className="text-accent">.</span>
      </span>
    </span>
  )
}
