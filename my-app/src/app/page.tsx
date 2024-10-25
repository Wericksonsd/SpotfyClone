'use client'

import { ArrowBigDownDash, ArrowLeft, ArrowRight, Bell, House, Library, List, Play, Plus, Search } from "lucide-react";
import { BasicContainer } from "./components/containers/basicContainer";
import { FullButton } from "./components/buttons/fullButton";
import { IconButton } from "./components/buttons/iconButton";
import { useState } from "react";
import { ContainerMusic } from "./components/musics/containerMusic";
import { ActualPlaylist } from "./components/actualPlaylist/actualPlaylist";
import Image from 'next/image'
import Link from "next/link";

export default function Home() {

  const [userLibrary, setUserLibrary] = useState(false)
  const [playlistNirvana, setPlaylistNirvana] = useState(false)

  const handleUserLibrary = () => setUserLibrary(!userLibrary)
  //const handleUserPlaylist = (var) => var((x) => !x)

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
                <ContainerMusic
                  imageURL="/cabecaradio.jpg"
                  alt="CabeçaRadio"
                  title="CabeçaRadio"
                  description="Playlist • CABEÇA AM/FM"
                />            
              </div>
          </BasicContainer>
        </aside>
      
        <main className="flex-1 bg-zinc-900 rounded-md relative overflow-hidden">
          <ActualPlaylist
            imageURL="/noorvana.jpg"
            alt="nirvana"
            title="This is Norvana"
            subTitle="This is Noranja. As melhores em só uma playlist."
            descMusica="As melhores do Narvena"
            duracaoPlaylist="Cerca de 1h30min."
            linkCriacao="#"
            criacaoPlaylist="Wersco"            
          />
          <div className="flex-1">
            CUCETÃO
          </div>
        </main>
      </div>

      <div className="h-24 w-full p-2 text-zinc-400">
        aaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
    </div>
  )
}
