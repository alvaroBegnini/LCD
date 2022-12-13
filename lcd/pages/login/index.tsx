import Image from 'next/image'
import nookies, { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import lightLogo from '../../public/logoTransparente.png'
import darkLogo from '../../public/darkLogo.png'
import activeLight from '../../public/icons/lightModes/activeLight.svg'
import inactiveDark from '../../public/icons/lightModes/inactiveDark.svg'
import activeDark from '../../public/icons/lightModes/activeDark.svg'
import inactiveLight from '../../public/icons/lightModes/inactiveLight.svg'
import axios from 'axios'
import { useRouter } from 'next/router'

function Login({ lightMode }: { lightMode: boolean }) {
  const [darkMode, setDarkMode] = useState(lightMode)
  const [loginFailed, setLoginFailed] = useState(false)
  const { register, handleSubmit, setValue } = useForm()

  const router = useRouter()

  function setMode(action: boolean) {
    if (action) {
      nookies.set(null, 'DARK_MODE', 'true')
      setDarkMode(true)
    } else {
      nookies.destroy(null, 'DARK_MODE')
      setDarkMode(false)
    }
  }

  async function handleLogin(formData: any) {
    const host = `http://${window.location.hostname}:${window.location.port === '3000' ? '3030' : window.location.port === "80"? "3030" : '1011'}/login`
    try {
      setLoginFailed(false)
      const { data } = await axios.post(host, {
        username: formData.login,
        password: formData.password,
      })
      nookies.set(null, 'LCD_TOKEN', data.token, {maxAge: 60 * 60})
      router.push('/clientesOffline')
    } catch (err) {
      setLoginFailed(true)
      setValue('password', '')
    }
  }

  return (
    <div
      className={`relative flex items-center justify-center h-screen transition-all ${
        darkMode ? 'bg-[#141414]' : 'bg-[#E2E2E2]'
      }`}
    >
      <div className="absolute flex items-center justify-center gap-4 top-4 right-4">
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
      <div
        className={`absolute bg-red-500 rounded text-md text-white font-semibold p-4 ${
          loginFailed ? `top-5 right-0 animate-bounce flex` : `hidden`
        } `}
      >
        Usuário ou senha inválidos
      </div>
      <div
        className={`flex flex-col items-center justify-center py-16 ${
          darkMode ? 'bg-[#1F1F1F]' : 'bg-white'
        } rounded-lg px-14 h-fit w-fit shadow-default`}
      >
        <div className="relative pb-12 rounded w-44">
          <Image alt="logo" src={darkMode ? lightLogo : darkLogo} width={180}></Image>
        </div>
        <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className={`${darkMode ? 'text-white' : 'text-base'} font-semibold`} htmlFor="login">
              Login:
            </label>
            <input
              autoFocus={true}
              required
              {...register('login')}
              className={`w-64 h-10 ${
                darkMode ? 'text-white bg-transparent border-white' : 'text-base border-base'
              } font-semibold text-center border rounded outline-none transition-al `}
              id="login"
            ></input>
          </div>
          <div className="flex flex-col">
            <label className={`${darkMode ? 'text-white' : 'text-base'} font-semibold`}>Senha:</label>
            <input
              required
              {...register('password')}
              className={`w-64 h-10 ${
                darkMode ? 'text-white bg-transparent border-white' : 'text-base border-base'
              } font-semibold text-center border rounded outline-none transition-al `}
              id="password"
              type="password"
            ></input>
          </div>
          <button
            type="submit"
            className={`w-full py-2 transition-all font-medium rounded outline-none ${
              darkMode ? 'bg-bright text-base' : 'bg-base text-white'
            }`}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: any) {
  const { LCD_TOKEN: jwt, DARK_MODE: lightMode } = parseCookies(ctx)
  if (jwt) {
    return {
      redirect: {
        permanent: false,
        destination: '/clientesOffline',
      },
      props: { lightMode: lightMode ? true : false },
    }
  }
  return {
    props: { lightMode: lightMode ? true : false },
  }
}

export default Login
