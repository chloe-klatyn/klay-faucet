import Header from './components/Header'
import Footer from './components/Footer'
import Intro from './components/Intro'
import AddressInput from './components/AddressInput'
import GlobalContext from './context/context'
import { useState } from 'react'

const App = () => {
  const [klaytnProvider, setKlaytnProvider] = useState()
  const [kaikasAddress, setKaikasAddress] = useState()
  const [caver, setCaver] = useState()

  const contextData = {
    klaytnProvider: klaytnProvider,
    kaikasAddress: kaikasAddress,
    caver: caver,
    setKlaytnProvider: setKlaytnProvider,
    setKaikasAddress: setKaikasAddress,
    setCaver: setCaver,
  }

  return (
    <div className="flex flex-col h-screen">
      <GlobalContext.Provider value={contextData}>
        <Header />
        <div className="mb-auto mt-20">
          <Intro />
          <AddressInput />
        </div>
        <Footer />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
