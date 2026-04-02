import React from 'react'

type TextVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'label'
type TextSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
type TextWeight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold'
type TextColor = 'primary' | 'secondary' | 'tertiary' | 'white' | 'gray' | 'black'
type TextFont = 'inter' | 'roboto' | 'montecarlo'

const fontMap: Record<TextFont, string> ={
      'inter': 'font-inter',
      'roboto': 'font-roboto',
      'montecarlo': 'font-montecarlo',
}

const sizeMap: Record<TextSize, string> = {
      'xs':   'text-xs',
      'sm':   'text-sm',
      'md':   'text-base',
      'lg':   'text-lg',
      'xl':   'text-xl',
      '2xl':  'text-2xl',
      '3xl':  'text-3xl',
      '4xl':  'text-4xl',
}

const weightMap: Record<TextWeight, string> = {
      'light':    'font-light',
      'normal':   'font-normal',
      'medium':   'font-medium',
      'semibold': 'font-semibold',
      'bold':     'font-bold',
}

const colorMap: Record<TextColor, string> = {
      'primary':   'text-primary',
      'secondary': 'text-secondary',
      'tertiary':  'text-tertiary',
      'white':     'text-white',
      'gray':      'text-gray-500',
      'black':     'text-gray-900',
}

interface TextProps {
      text: string
      variant?: TextVariant
      size?: TextSize
      weight?: TextWeight
      color?: TextColor
      font?: TextFont
      className?: string
}

const Text = ({
      text,
      variant = 'p',
      size = 'md',
      weight = 'normal',
      color = 'black',
      font = 'inter',
      className = '',
}: TextProps) => {
      const Tag = variant
      const classes = `${sizeMap[size]} ${weightMap[weight]} ${colorMap[color]} ${fontMap[font]} ${className}`

      return (
            <Tag className={classes}>
                  {text}
            </Tag>
      )
}

export default Text