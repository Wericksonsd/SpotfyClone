'use client'

import { ArrowBigDownDash, ArrowLeft, ArrowRight, Bell, House, Library, List, Play, Plus, Search } from "lucide-react";
import { BasicContainer } from "./components/containers/basicContainer";
import { FullButton } from "./components/buttons/fullButton";
import { IconButton } from "./components/buttons/iconButton";
import { useState } from "react";
import { ContainerMusic } from "./components/musics/containerMusic";
import Image from 'next/image'
import Link from "next/link";

export default function Home() {

  const [userLibrary, setUserLibrary] = useState(false)

  const handleUserLibrary = () => setUserLibrary(!userLibrary)

  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col p-2">
      <div className="w-full flex-1 flex gap-2">
        <aside className="w-[400px] h-full flex flex-col space-y-2">
          <BasicContainer>
              <FullButton gap="lg">
                <House className="size-6 min-h-10"/>
                <span className="text-md font-bold flex-1">Início</span>
              </FullButton>
              <FullButton gap="lg">
                <Search className="size-6 min-h-10"/>
                <span className="text-md font-bold flex-1">Buscar</span>
              </FullButton>
          </BasicContainer>
          <BasicContainer size="full" spacing="lg">
              <div className="text-zinc-400 w-full py-1 flex items-center justify-center gap-1">
                <FullButton onClick={handleUserLibrary} size="full">
                  <Library className="size-6 min-h-10"/>
                  {userLibrary ? <span className="text-md font-bold flex-1">Sua Biblioteca</span> : <span className="text-md font-bold flex-1 text-left">Cu</span>}
                </FullButton>
                <IconButton><Plus className="size-6 font-semibold"/></IconButton>
                <IconButton><ArrowRight className="size-6 font-semibold"/></IconButton>
              </div>

              <div className="w-full min-h-10 flex items-center justify-center">
                <div className="flex-1 flex overflow-x-hidden gap-2">
                  <IconButton size="text" color="full">
                    <span className="text-sm font-medium">Playlist</span>
                  </IconButton>
                </div>
                <IconButton color="full">
                  <ArrowRight className="size-6 font-semibold"/>
                </IconButton>
              </div>

              <div className="flex-1 w-full overflow-y-scroll">
                <div className="w-full flex items-center justify-between mb-3">
                  <IconButton color="full" size="iconMd">
                    <Search className="size-5 font-semibold"/>
                  </IconButton>
                  <FullButton size="contained">
                    Recentes
                    <List className="size-5"/>
                  </FullButton>
                </div>
                <ContainerMusic
                  imageURL="/noorvana.jpg"
                  alt="Nevanu"
                  title="Norvana"
                  description="Playlist • Norvano"
                />                
              </div>
          </BasicContainer>
        </aside>
      
        <main className="flex-1 bg-zinc-900 rounded-md relative overflow-hidden">
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
                  src={'/noorvana.jpg'}
                  width={250}
                  height={250}
                  alt={'Noorviaal'}
                />
              </div>

              <div className="h-[250px] flex flex-col justify-end gap-2 text-zinc-300 text-sm ">
                <span>
                  Playlist
                </span>

                <span className="text-9xl font-extrabold">
                  This is Nirvana
                </span>

                <span className="text-zinc-400">
                This is Nirvana. Todos os maiores hits em uma só playlist.
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
                      <Link href={'#'} className="font-semibold hover:underline">Spotify</Link>
                    </div>
                    <span className="font-semibold">539.324 salvamentos 50 músicas,</span> cerca de 3h 15min
                  </span>
                </div>
              </div>
              
            </div>
            <div className="flex-1">
              aaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </div>
        </main>
      </div>

      <div className="h-24 w-full p-2 text-zinc-400">
        aaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
    </div>
  )
}
