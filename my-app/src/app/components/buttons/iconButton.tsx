import { ReactNode } from "react"
import { tv, VariantProps } from "tailwind-variants"

const iconButtonVariant = tv ({
    base: "text-zinc-300 rounded-full hover:text-zinc-200 hover:cursor-pointer",

    variants:{
        size:{
            icon: 'p-1',
            iconMd: 'p-2',
            text: 'px-4 py-1',
        },

        color: {
            none: 'bg-transparent hover:bg-zinc-800',
            full: 'bg-zinc-800 hover:bg-zinc-700'
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