import Image from 'next/image'
import Link from "next/link";
import { ComponentProps} from "react"
import { IconButton } from '../buttons/iconButton'
import { ArrowBigDownDash, ArrowLeft, ArrowRight, Bell, Link as LinkTai, Play } from 'lucide-react'

interface ContainerMusicProps extends ComponentProps<'button'>{
    imageURL: string
    alt: string
    title: string
    subTitle: string
    descMusica: string
    duracaoPlaylist: string
    linkCriacao: string
    criacaoPlaylist: string
}

export const ActualPlaylist = (
    {
        imageURL,
        alt,
        title,
        subTitle,
        descMusica,
        duracaoPlaylist,
        linkCriacao,
        criacaoPlaylist,

        ...props
    } : ContainerMusicProps) => {

    return(
        <div>
            <div className="w-full p-4 flex items-center justify-center gap-2 fixed">
                <IconButton color="full">
                    <ArrowLeft className="size-6"/>
                </IconButton>

                <IconButton color="full">
                    <ArrowRight className="size-6"/>
                </IconButton>

                <div className="flex-1 flex items-center justify-start gap-3">
                    <IconButton color="verde" size="iconLg">                  
                        <Play className="size-6"/>
                    </IconButton>
                <span className="text-2xl font-bold text-zinc-200">
                    This is Norville
                </span>
                </div>

                <IconButton size="text" color="full">
                    <ArrowBigDownDash className="size-7"/>
                    <span className="text-md font-semibold">Playlist</span>
                </IconButton>

                <IconButton color="full" size="iconMd">
                    <Bell className="size-5"/>
                </IconButton>

                <IconButton color="full" size="icon">
                    <div className="rounded-full overflow-hidden">
                        <Image
                            src={'/shadow.jpg'}
                            width={28}
                            height={28}
                            alt={'Shadow'}
                        />
                    </div>
                </IconButton>
            </div>

            <div className="w-full p-4 pt-28 flex items-start justify-start gap-4 bg-gradient-to-b from-rose-700/80 from-0% to-rose-950/80 to-100%">
                <div className="rounded-md overflow-hidden">
                    <Image
                        src={imageURL}
                        width={250}
                        height={250}
                        alt={alt}
                    />
                </div>

                <div className="h-[250px] flex flex-col justify-end gap-2 text-zinc-300 text-sm ">
                    <span>
                        Playlist
                    </span>

                    <span className="text-9xl font-extrabold">
                        {title}
                    </span>

                    <span className="text-zinc-400">
                        {subTitle}
                    </span>

                    <div>
                        <span className="flex gap-2">
                            <div className="flex gap-1">
                                <Image
                                src={'/spotify-icon.svg'}
                                height={20}
                                width={20}
                                alt="(m)"
                                />
                                <Link href={linkCriacao} className="font-semibold hover:underline">{criacaoPlaylist}</Link>
                            </div>
                        <span className="font-semibold">{descMusica}</span>{duracaoPlaylist}
                        </span>
                    </div>
                </div>              
            </div>
        </div>
    )
}
