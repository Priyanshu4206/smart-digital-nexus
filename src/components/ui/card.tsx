import { cn } from '@/lib/utils'
import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
  hoverable?: boolean
  glassEffect?: boolean
}

const Card: React.FC<CardProps> = ({
  className,
  children,
  hoverable = false,
  glassEffect = false,
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl overflow-hidden',
        hoverable &&
        'transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg',
        glassEffect ? 'glass' : 'bg-white border border-border shadow-sm',
        className
      )}
    >
      {children}
    </div>
  )
}

export const CardHeader: React.FC<{
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => {
  return <div className={cn('p-6', className)}>{children}</div>
}

export const CardContent: React.FC<{
  className?: string
  style?: React.CSSProperties
  children: React.ReactNode
}> = ({ className, children }) => {
  return <div className={cn('px-6 pb-6', className)}>{children}</div>
}

export const CardFooter: React.FC<{
  className?: string
  children: React.ReactNode
}> = ({ className, children }) => {
  return (
    <div
      className={cn(
        'px-6 py-4 bg-secondary/50 border-t border-border',
        className
      )}
    >
      {children}
    </div>
  )
}

export default Card
