import { ReactNode } from "react"
import { tv, VariantProps } from 'tailwind-variants'

const containerVariants = tv({
    base: 'w-full px-3 py-2 flex flex-col items-center justify-start bg-zinc-900 rounded-md',
    variants: {
    size: {
        basic: 'h-auto',
        full: 'flex-grow'
    },
    spacing: {
        basic: 'space-y-0',
        md: 'space-y-1',
        lg: 'space-y-2',
    }
    },
    defaultVariants: {
        size: 'basic',
        spacing: 'basic'
    }
});

interface BasicContainerProps extends VariantProps<typeof containerVariants> {
    children: ReactNode
}

export const BasicContainer = ({
    children,
    size,
    spacing,
} : BasicContainerProps) => {

    return(
        <div className={containerVariants({size, spacing})}>
            {children}
        </div>
    )

}