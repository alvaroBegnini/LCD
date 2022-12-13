import { AiOutlineAudioMuted, AiOutlineInfoCircle, AiOutlineAudio } from 'react-icons/ai'
import { MdOpenInNew } from 'react-icons/md'
import { useState, useEffect } from 'react'

function TableRow({ props }: any) {
  const [showIp, setShowIp] = useState(false)
  const [content, setContent] = useState(props.client.ip)
  const [clipboard, setClipboard] = useState<any>()
  useEffect(() => {
    setClipboard(navigator.clipboard)
  }, [])

  async function copyToClipboard(content: string) {
    clipboard.writeText(content)
    setContent('Copiado')
    setTimeout(() => setContent(props.client.ip), 2000)
    return
  }

  return (
    <tr className={`${props.silenced ? (props.darkMode ? 'bg-red-900' : 'bg-red-400') : ''}`}>
      <td className={`${props.darkMode ? 'text-white' : 'text-black'} md:px-6 text-sm md:text-normal md:py-4 px-4 py-2`}>{props.key + 1}</td>
      <td className={`${props.darkMode ? 'text-white' : 'text-black'} md:px-6  md:py-4 px-4 py-2 text-sm md:text-normal`}>
        {props.client.nome.toLocaleUpperCase()}
      </td>
      <td className={`${props.darkMode ? 'text-white' : 'text-black'} md:px-6 md:py-4 px-4 py-2 text-sm md:text-normal`}>
        {props.date.getDay()}D {props.date.getHours()}H {props.date.getMinutes()}M {props.date.getSeconds()}S
      </td>
      <td className={`${props.darkMode ? 'text-white' : 'text-black'} md:px-6 md:py-4 px-4 py-2 text-sm md:text-normal`}>
        <div className="flex items-center justify-center gap-2">
          <div
            onMouseLeave={() => setShowIp(!showIp)}
            onMouseEnter={() => setShowIp(!showIp)}
            className="relative flex items-center justify-center "
          >
            {showIp ? (
              <h1
                className={`${
                  props.darkMode ? 'bg-bright text-black' : ' bg-bright text-black w-fit'
                } font-medium absolute p-1 rounded -top-8 flex flex-shrink-0`}
              >
                {content}
              </h1>
            ) : (
              ''
            )}
            <AiOutlineInfoCircle
              onClick={() => copyToClipboard(props.client.ip)}
              className="cursor-pointer"
            ></AiOutlineInfoCircle>
          </div>

          {props.silenced ? (
            <AiOutlineAudioMuted
              className="cursor-pointer"
              onClick={() => {
                props.setSilence(props.client.nome, !props.silenced)
              }}
            ></AiOutlineAudioMuted>
          ) : (
            <AiOutlineAudio
              className="cursor-pointer"
              onClick={() => {
                props.setSilence(props.client.nome, !props.silenced)
              }}
            ></AiOutlineAudio>
          )}
          <a
            target="_blank"
            href={`http://172.31.255.2/admin/cliente_alt.hhvm?uuid=${props.client.uuid}`}
            rel="noreferrer"
          >
            <MdOpenInNew className="cursor-pointer"></MdOpenInNew>
          </a>
        </div>
      </td>
    </tr>
  )
}

export default TableRow
