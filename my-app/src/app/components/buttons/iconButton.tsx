import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const iconButtonVariant = tv ({
    base: "rounded-full flex items-center justify-center gap-2 hover:text-zinc-200 hover:cursor-pointer",

    variants:{
        size:{
            icon: 'p-1',
            iconMd: 'p-2',
            iconLg: 'p-4',
            text: 'px-4 py-1',
        },

        color: {
            none: 'text-zinc-300 bg-transparent hover:bg-zinc-800',
            full: 'text-zinc-300 bg-zinc-800 hover:bg-zinc-700',
            verde: 'text-zinc-900 bg-green-600 hover:bg-green-500'
        }
    },

    defaultVariants:{
        size: 'icon',
        color: 'none'
    }
})

interface IconButtonProps extends VariantProps<typeof iconButtonVariant>{

    children: ReactNode
    
}

export const IconButton = ({
    children,
    size,
    color
} : IconButtonProps) => {

    return (
        <div className={iconButtonVariant({size, color})}>
            {children}
        </div>
    )

}