import { useEffect, useState, useContext } from 'react'
import providerContext from '../context/context'
import Caver from 'caver-js'

const Wallet = () => {
  const { klaytnProvider, kaikasAddress, setKaikasAddress } = useContext(providerContext)
  const [network, setNetwork] = useState<any>()

  const connectKaikas = async () => {
    try {
      const accounts = await klaytnProvider.enable()
      console.log('accounts: ', accounts)
      setKaikasAddress(accounts[0])
    } catch (error: any) {
      console.error(error.message)
    }
  }

  const getKaikasBalance = async () => {
    const caver = new Caver(klaytnProvider)
    const account = klaytnProvider.selectedAddress
    const balance = await caver.klay.getBalance(account)
    console.log('balance: ', balance)
  }

  const checkKaikasStatus = async () => {
    const enabled = klaytnProvider._kaikas.isEnabled()
    const approved = await klaytnProvider._kaikas.isApproved()
    const unlocked = await klaytnProvider._kaikas.isUnlocked()
    console.log('enabled: ', enabled)
    console.log('approved: ', approved)
    console.log('unlocked: ', unlocked)
  }

  const detectNetwork = () => {
    if (klaytnProvider) {
      const networkId = klaytnProvider.networkVersion
      if (networkId === 1001) {
        setNetwork('Baobab')
      } else if (networkId === 8217) {
        setNetwork('Cypress')
      }
    }
  }

  const shortenAddress = (str: any) => {
    return str.substring(0, 8) + '...' + str.substring(str.length - 4)
  }

  useEffect(() => {
    if (klaytnProvider && kaikasAddress) {
      checkKaikasStatus()
      getKaikasBalance()
      detectNetwork()
    }
  }, [klaytnProvider, kaikasAddress])

  return (
    <div>
      {kaikasAddress ? (
        <div className="mx-8 text-gray-600 space-x-4">
          <span>{network}</span>
          <span>|</span>
          <span>{shortenAddress(kaikasAddress)}</span>
        </div>
      ) : (
        <button className="mx-8 border rounded-full px-4 py-2 border-grey" onClick={connectKaikas}>
          Connect Wallet
        </button>
      )}
    </div>
  )
}

export default Wallet
