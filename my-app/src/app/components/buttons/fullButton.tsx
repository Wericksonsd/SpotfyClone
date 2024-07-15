import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const fullButtonVariant = tv ({
    base: "text-zinc-400 flex-1 py-1 px-3 flex items-center justify-start hover:text-zinc-300 cursor-pointer",
    variants: {
    size: {
        basic: 'w-full',
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

interface FullButtonProps extends VariantProps<typeof fullButtonVariant>{
    children: ReactNode,
}

export const FullButton = ({
    children,
    size,
    gap
} : FullButtonProps) => {

    return (
        <div className={fullButtonVariant({size, gap})}>
            {children}
        </div>
    )

}