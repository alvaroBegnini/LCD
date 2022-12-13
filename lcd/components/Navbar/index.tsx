import Image from 'next/image'
import { SetStateAction, useState } from 'react'
import darkLogo from '../../public/darkLogo.png'
import lightLogo from '../../public/logoTransparente.png'
import { IoMdExit } from 'react-icons/io'
import Link from 'next/link'
import activeLight from '../../public/icons/lightModes/activeLight.svg'
import inactiveDark from '../../public/icons/lightModes/inactiveDark.svg'
import activeDark from '../../public/icons/lightModes/activeDark.svg'
import inactiveLight from '../../public/icons/lightModes/inactiveLight.svg'
import nookies from 'nookies'
import { useRouter } from 'next/router'

export default function Navbar({
  darkMode,
  setDarkMode,
  active,
}: {
  darkMode: boolean
  setDarkMode: SetStateAction<any>
  active: { antennas: boolean; clientsOffline: boolean }
}) {
  const router = useRouter()
  const [navOpen, setNavOpen] = useState(false)

  function setMode(action: boolean) {
    if (action) {
      nookies.set(null, 'DARK_MODE', 'true')
      setDarkMode(true)
    } else {
      nookies.destroy(null, 'DARK_MODE')
      setDarkMode(false)
    }
  }

  function logout() {
    nookies.destroy(null, 'LCD_TOKEN')
    router.push('/')
  }

  return (
    <nav
      className={`${
        darkMode ? 'bg-[#1F1F1F]' : 'bg-white'
      } w-full h-16 flex items-center justify-between px-2 md:px-14 absolute top-0`}
    >
      <Image src={darkMode ? lightLogo : darkLogo} width={94} alt="Logo"></Image>
      <div className={`hidden md:flex items-center justify-center gap-4 `}>
        <Link
          className={`${
            active.clientsOffline
              ? 'font-bold underline underline-offset-4 text-bright'
              : darkMode
              ? 'text-white'
              : 'text-base'
          } text-lg`}
          href={'/clientesOffline'}
        >
          Clientes Offline
        </Link>
        <Link
          className={`${
            active.antennas
              ? 'font-bold underline underline-offset-4 text-bright'
              : darkMode
              ? 'text-white'
              : 'text-base'
          } text-lg`}
          href={'/antennas'}
        >
          Antenas
        </Link>
      </div>
      <div className="hidden gap-4 md:flex">
        <div className="flex gap-4">
          <Image
            className="cursor-pointer"
            onClick={() => setMode(true)}
            alt="Dark mode"
            width={27}
            src={darkMode ? activeDark : inactiveDark}
          ></Image>
          <Image
            className="cursor-pointer"
            onClick={() => setMode(false)}
            alt="Light mode"
            width={30}
            src={darkMode ? inactiveLight : activeLight}
          ></Image>
        </div>
        <button
          onClick={logout}
          className={`border ${
            darkMode
              ? 'text-white border-white hover:bg-white hover:text-black'
              : 'text-base border-base hover:bg-base hover:text-white'
          } text-lg transition-all  flex items-center justify-center px-4 py-1 gap-2 rounded`}
        >
          Sair <IoMdExit></IoMdExit>
        </button>
      </div>
      <div 
        onClick={() => setNavOpen(!navOpen)}
        className={`flex flex-col md:hidden cursor-pointer h-8 w-9 items-center justify-center gap-1.5`}
      >
        <div className={`w-5/6 h-1 bg-bright rounded-full`}></div>
        <div className={`w-5/6 h-1 bg-bright rounded-full`}></div>
        <div className={`w-5/6 h-1 bg-bright rounded-full`}></div>
      </div>
      {navOpen ? <div></div> : ''}
    </nav>
  )
}
