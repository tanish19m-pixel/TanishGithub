import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'verified' | 'default' | 'score'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold',
        variant === 'verified' && 'bg-emerald-100 text-emerald-700',
        variant === 'score' && 'bg-brand-100 text-brand-700',
        variant === 'default' && 'bg-slate-100 text-slate-600',
        className
      )}
    >
      {children}
    </span>
  )
}
