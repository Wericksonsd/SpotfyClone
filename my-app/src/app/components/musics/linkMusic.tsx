import Image from 'next/image'
import Link from 'next/link'

interface ContainerMusicProps{
    imageURL: string
    hRef: string
    alt: string
    title: string
    description: string
}

export const ContainerMusic = ({
    imageURL,
    hRef,
    alt,
    title,
    description
} : ContainerMusicProps) => {

    const defaultProps = {
        imageURL: "/noorvana.jpg",
        hRef: '#',
        alt: "NORVANA",
        title: "NORVANA",
        description: "Playlist • Norvana"
    }

    return (
        <Link href={hRef} className="w-full p-2 flex rounded-md space-x-3 text-left hover:bg-zinc-800 hover:cursor-pointer">
            <div className='rounded-md overflow-hidden'>
                <Image
                    src={imageURL}
                    width={50}
                    height={50}
                    alt={alt}
                />
            </div>
            <div className="flex flex-col justify-center text-zinc-300 font-semibold">
            <span className="text-lg">{title}</span>
            <span className="text-xs font-medium">{description}</span>
            </div>
        </Link>
    )

}