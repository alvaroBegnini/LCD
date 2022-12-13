import { useEffect, useState } from 'react'
import { client } from '../../types'
import { io } from 'socket.io-client'
import nookies, { parseCookies } from 'nookies'
import Navbar from '../../components/Navbar'
import TableRow from '../../components/tableRow'
import Head from 'next/head'
import axios from 'axios'

function ClientesOffline({ lightMode }: { lightMode: boolean }) {
  const [clients, setClients] = useState<client>()
  const [darkMode, setDarkMode] = useState(lightMode)
  const [showSilenced, setShowSilenced] = useState(false)

  useEffect(() => {
    const hostname = window.location.hostname
    const port = window.location.port == '80' ? '3030' : window.location.port === '3000' ? '3030' : '1011'
    console.log(port)
    const url = `http://${hostname}:${port}`
    socketInitializer(url)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const socketInitializer = async (url: string) => {
    const { LCD_TOKEN: token } = nookies.get()
    const socket = io(url, {
      auth: {
        token,
      },
    })
    socket.on('connect', () => {
      console.log('connected')
    })
    socket.on('message', (message: string) => {
      const parsedMessage = JSON.parse(message)
      setClients(parsedMessage)
    })
  }

  async function setSilence(name: string, action: boolean) {
    const hostname = window.location.hostname
    const port = window.location.port == '80' ? '3030' : window.location.port === '3000' ? '3030' : '1011'
    const url = `http://${hostname}:${port}/silence`
    const { LCD_TOKEN: token } = nookies.get()
    await axios.post(url, {
      client: name,
      action,
    }, {headers: {
        "Authorization": `Bearer ${token}`
    }})
  }

  return (
    <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-[#141414]' : 'bg-[#E8E8E8]'}`}>
      <Navbar active={{ clientsOffline: true, antennas: false }} darkMode={darkMode} setDarkMode={setDarkMode}></Navbar>
      <div className="flex items-center justify-center h-full py-32 mx-12">
        <div className="h-fit w-fit shadow-default ">
          <table className={`${darkMode ? 'bg-[#1F1F1F]' : 'bg-white'} rounded-t-lg`}>
            <thead>
              <tr className={`${darkMode ? 'bg-[#4C4C4C]' : 'bg-base'}`}>
                <td className={`text-white py-3 px-6 rounded-tl-lg`}>#</td>
                <td className={`text-white py-3 px-6`}>Nome</td>
                <td className={`text-white py-3 px-6`}>Offline há</td>
                <td className={`text-white py-3 px-6 rounded-tr-lg`}>Ação</td>
              </tr>
            </thead>
            <tbody>
              {clients?.notSilenced?.map((client, key) => {
                const date = new Date(client.date as any)
                const props = {
                  date,
                  darkMode,
                  key,
                  client,
                  setSilence,
                  silenced: false
                }
                return <TableRow props={props} key={key} />
              })}
              {showSilenced
                ? clients?.silenced?.map((client, key) => {
                    const date = new Date(client.date as any)
                    const props = {
                      date,
                      darkMode,
                      key,
                      client,
                      setSilence,
                      silenced: true
                    }
                    return <TableRow props={props} key={key} />
                  })
                : ''}
            </tbody>
          </table>
          <div
            className={`${
              darkMode ? 'bg-[#4C4C4C]' : 'bg-base'
            } relative flex items-center justify-between h-12 w-full rounded-b-lg px-6`}
          >
            <p className={`text-white`}>Mostrar clientes silenciados</p>
            <div
              onClick={() => setShowSilenced(!showSilenced)}
              className={`relative w-12 h-6 transition-all rounded-full cursor-pointer ${
                showSilenced ? 'bg-bright' : 'bg-white'
              }`}
            >
              <div
                className={`absolute w-4 h-4 ${
                  darkMode ? 'bg-[#4c4c4d]' : 'bg-base'
                } rounded-full top-1 transition-all ${showSilenced ? 'translate-x-7' : 'left-1'}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: any) {
  const { LCD_TOKEN: jwt, DARK_MODE: lightMode } = parseCookies(ctx)
  if (!jwt || jwt === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
      props: { lightMode: lightMode ? true : false },
    }
  }
  return {
    props: { lightMode: lightMode ? true : false },
  }
}

export default ClientesOffline
