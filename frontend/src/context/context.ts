import { createContext } from 'react'

interface context {
  klaytnProvider: any
  kaikasAddress: any
  caver: any
  setKlaytnProvider: (a: any) => void
  setKaikasAddress: (a: any) => void
  setCaver: (a: any) => void
}

const contextDefaultValue = {
  klaytnProvider: null,
  kaikasAddress: null,
  caver: null,
  setKlaytnProvider: (a: any) => null,
  setEthProvider: (a: any) => null,
  setKaikasAddress: (a: any) => null,
  setCaver: (a: any) => null,
}

const context = createContext<context>(contextDefaultValue)

export default context
