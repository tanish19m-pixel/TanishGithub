import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  strong?: boolean
  hover?: boolean
}

export function GlassCard({ children, className, strong, hover }: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl',
        strong ? 'glass-strong' : 'glass',
        hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
        className
      )}
    >
      {children}
    </div>
  )
}
