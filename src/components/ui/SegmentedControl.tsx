"use client";
import { motion } from 'framer-motion'
import { ComponentType } from 'react'

export interface SegmentedOption<T extends string> {
  id: T
  label: string
  icon?: ComponentType<{ size?: number; className?: string }>
}

interface SegmentedControlProps<T extends string> {
  options: readonly SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  layoutId?: string
  size?: 'sm' | 'md'
  ariaLabel?: string
  className?: string
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  layoutId = 'segmentedControl',
  size = 'md',
  ariaLabel,
  className = '',
}: SegmentedControlProps<T>) {
  const isSm = size === 'sm'
  const btnSize = isSm ? 'h-7 w-7' : 'h-8 w-8'
  const iconSize = isSm ? 15 : 16
  const radius = isSm ? 'rounded-md' : 'rounded-lg'

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={`flex items-center ${isSm ? 'rounded-lg' : 'rounded-xl'} bg-gray-100/90 p-1 ring-1 ring-black/5 dark:bg-gray-800/80 dark:ring-white/10 shrink-0 ${className}`}
    >
      {options.map((opt) => {
        const isActive = value === opt.id
        const Icon = opt.icon

        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            title={opt.label}
            aria-label={opt.label}
            className={`relative flex ${btnSize} items-center justify-center ${radius} text-xs font-medium transition-colors ${
              isActive
                ? 'text-gray-900 dark:text-white'
                : 'text-gray-400 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className={`absolute inset-0 ${radius} bg-white shadow-xs dark:bg-gray-700`}
                transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }}
              />
            )}
            {Icon && <Icon size={iconSize} className="relative z-10 shrink-0" />}
          </button>
        )
      })}
    </div>
  )
}
