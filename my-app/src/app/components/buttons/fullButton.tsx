'use client'

import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const fullButtonVariant = tv ({
    base: "text-zinc-400 text-left py-1 px-3 flex items-center justify-start hover:text-zinc-300 cursor-pointer",
    variants: {
    size: {
        basic: 'w-full',
        contained: 'w-auto',
        full: 'flex-grow'
    },
    gap: {
        basic: 'gap-1',
        md: 'gap-4',
        lg: 'gap-6'
    }
    },
    defaultVariants: {
        size: 'basic',
        gap: 'basic'
    }
})

interface FullButtonProps extends ComponentProps<'button'>, VariantProps<typeof fullButtonVariant>{
    children: ReactNode,
}

export const FullButton = ({
    children,
    size,
    gap,    
    ...props
} : FullButtonProps) => {

    return (
        <button {...props} className={fullButtonVariant({size, gap})}>
            {children}
        </button>
    )

}