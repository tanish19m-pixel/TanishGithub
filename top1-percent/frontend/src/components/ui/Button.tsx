import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 active:scale-[0.98] disabled:opacity-50',
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-sm',
        size === 'lg' && 'px-8 py-4 text-base',
        variant === 'primary' && 'bg-brand-600 text-white shadow-lg shadow-brand-600/25 hover:bg-brand-700',
        variant === 'secondary' && 'glass-strong text-brand-700 hover:bg-white/90',
        variant === 'ghost' && 'text-slate-600 hover:bg-white/50',
        variant === 'outline' && 'border border-brand-200 text-brand-700 hover:bg-brand-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
