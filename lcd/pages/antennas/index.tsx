import Navbar from '../../components/Navbar'
import { useState } from 'react'
import { parseCookies } from 'nookies'

function Antennas({ lightMode }: { lightMode: boolean }) {
  const [darkMode, setDarkMode] = useState(lightMode)
  return (
    <div>
      <Navbar active={{ clientsOffline: false, antennas: true }} darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
      <div className={`h-screen flex items-center justify-center ${darkMode ? 'bg-[#1F1F1F]' : 'bg-[#E8E8E8]'}`}>
        <p className={`${darkMode ? 'text-white' : 'text-black'} text-2xl font-bold`}>Página em desenvolvimento</p>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: any) {
  const { LCD_TOKEN: jwt, DARK_MODE: lightMode } = parseCookies(ctx)
  if (jwt) {
    return {
      props: { lightMode: lightMode ? true : false },
    }
  }
  return {
    redirect: {
      permanent: false,
      destination: '/login',
    },
    props: { lightMode: lightMode ? true : false },
  }
}

export default Antennas
