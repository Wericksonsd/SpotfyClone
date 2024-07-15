import { ArrowRight, House, Library, List, Plus, Search } from "lucide-react";
import { BasicContainer } from "./components/containers/basicContainer";
import { FullButton } from "./components/buttons/fullButton";

export default function Home() {
  return (
    <div className="w-full h-full bg-zinc-950 flex flex-col p-2">
      <div className="w-full flex-1 flex gap-2">
        <aside className="w-[354px] h-full flex flex-col space-y-2">
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
                <FullButton size="full">
                  <Library className="size-6 min-h-10"/>
                  <span className="text-md font-bold flex-1">Sua Biblioteca</span>
                </FullButton>
                <span className="rounded-full p-1 hover:bg-zinc-800 text-zinc-200"><Plus className="size-6 font-semibold"/></span>
                <span className="rounded-full p-1 hover:bg-zinc-800 text-zinc-200"><ArrowRight className="size-6 font-semibold"/></span>
              </div>

              <div className="max-w-full min-h-10 flex items-center justify-center">
                <div className="flex-1 flex overflow-x-hidden gap-2">
                  <button className="bg-zinc-800 text-zinc-300 text-sm font-semibold rounded-full px-4 py-1  hover:bg-zinc-700/50 hover:text-zinc-200">
                    Playlist
                  </button>
                  <button className="bg-zinc-800 text-zinc-300 text-sm font-semibold rounded-full px-4 py-1  hover:bg-zinc-700/50 hover:text-zinc-200">
                    Playlist
                  </button>
                  <button className="bg-zinc-800 text-zinc-300 text-sm font-semibold rounded-full px-4 py-1  hover:bg-zinc-700/50 hover:text-zinc-200">
                    Playlist
                  </button>
                  <button className="bg-zinc-800 text-zinc-300 text-sm font-semibold rounded-full px-4 py-1  hover:bg-zinc-700/50 hover:text-zinc-200">
                    Playlist
                  </button>
                  <button className="bg-zinc-800 text-zinc-300 text-sm font-semibold rounded-full px-4 py-1  hover:bg-zinc-700/50 hover:text-zinc-200">
                    Playlist
                  </button>
                  <button className="bg-zinc-800 text-zinc-300 text-sm font-semibold rounded-full px-4 py-1  hover:bg-zinc-700/50 hover:text-zinc-200">
                    Playlist
                  </button>
                  <button className="bg-zinc-800 text-zinc-300 text-sm font-semibold rounded-full px-4 py-1  hover:bg-zinc-700/50 hover:text-zinc-200">
                    Playlist
                  </button>
                </div>
                <button title="Navegar" className="rounded-full p-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-200">
                  <ArrowRight className="size-6 font-semibold"/>
                </button>
              </div>

              <div className="flex-1 w-full overflow-y-scroll">
                <div className="w-full flex items-center justify-between mb-3">
                  <button title="Navegar" className="rounded-full p-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200">
                    <Search className="size-5 font-semibold"/>
                  </button>
                  <span className="flex items-center justify-center gap-1 text-sm text-zinc-300">
                    Recentes
                    <List className="size-5"/>
                  </span>
                </div>
                <div className="w-full h-16 p-2 flex rounded-md space-x-2 hover:bg-zinc-800">
                  <div className="size-12 bg-green-400 rounded-md">
                  </div>
                  <div className="flex flex-col text-zinc-300 font-semibold">
                    <span className="text-lg">Nirvana</span>
                    <span className="text-xs font-medium">Playlist - Nirvana</span>
                  </div>
                </div>
                <div className="w-full h-16 p-2 flex rounded-md space-x-2 hover:bg-zinc-800">
                  <div className="size-12 bg-green-400 rounded-md">
                  </div>
                  <div className="flex flex-col text-zinc-300 font-semibold">
                    <span className="text-lg">Nirvana</span>
                    <span className="text-xs font-medium">Playlist - Nirvana</span>
                  </div>
                </div>
                <div className="w-full h-16 p-2 flex rounded-md space-x-2 hover:bg-zinc-800">
                  <div className="size-12 bg-green-400 rounded-md">
                  </div>
                  <div className="flex flex-col text-zinc-300 font-semibold">
                    <span className="text-lg">Nirvana</span>
                    <span className="text-xs font-medium">Playlist - Nirvana</span>
                  </div>
                </div>
                <div className="w-full h-16 p-2 flex rounded-md space-x-2 hover:bg-zinc-800">
                  <div className="size-12 bg-green-400 rounded-md">
                  </div>
                  <div className="flex flex-col text-zinc-300 font-semibold">
                    <span className="text-lg">Nirvana</span>
                    <span className="text-xs font-medium">Playlist - Nirvana</span>
                  </div>
                </div>
              </div>
          </BasicContainer>
        </aside>
      
        <main className="flex-1 bg-zinc-900 rounded-md bg-gradient-to-b from-rose-900/50 from-0% to-zinc-900 to-40%">
        <div className="w-full h-24 ">

        </div>
        </main>
      </div>

      <div className="h-24 w-full p-2 text-zinc-400">
        aaaaaaaaaaaaaaaaaaaaaaaaa
      </div>
    </div>
  )
}
