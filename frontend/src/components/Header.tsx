import logo from '../assets/logo.svg'
import { useEffect, useContext } from 'react'
import providerContext from '../context/context'
import Wallet from './Wallet'

declare const window: any

const Header = () => {
  const { klaytnProvider, setKlaytnProvider } = useContext(providerContext)

  useEffect(() => {
    if (typeof window.klaytn !== 'undefined') {
      const provider = window.klaytn
      setKlaytnProvider(provider)
      // console.log('klay provider:', provider)
    }
  }, [])

  return (
    <header>
      <div className="flex place-content-between p-3 items-center text-gray-900 bg-gray-100 shadow shadow-md">
        <img src={logo} alt="logo" width="50px" height="50px" />
        <Wallet />
      </div>
    </header>
  )
}

export default Header
