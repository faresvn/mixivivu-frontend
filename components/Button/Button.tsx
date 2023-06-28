import React from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'normal'
  typeStyle?: 'color' | 'outline' | 'outline-dark' | 'link-color'
  destructive?: boolean
  iconLeading?: React.ReactNode
  iconTrailing?: React.ReactNode
  disable?: boolean
  label: string
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'normal',
  typeStyle = 'color',
  destructive,
  iconLeading,
  iconTrailing,
  label,
  disable,
  ...props
}: ButtonProps) => {
  const labelSize = size === 'normal' ? 'regular' : 'small'
  const mode = destructive ? `button-${typeStyle}-destructive` : `button-${typeStyle}`

  return (
    <button
      type="button"
      className={[styles[`button-${size}`], styles[mode]].join(' ')}
      disabled={disable}
      {...props}
    >
      {iconLeading && iconLeading}
      <label className={labelSize}>{label}</label>
      {iconTrailing && iconTrailing}
    </button>
  )
}
