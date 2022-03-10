import { useEffect, useContext } from 'react'
import providerContext from '../context/context'
import Caver from 'caver-js'

const Wallet = () => {
  const { klaytnProvider, setKaikasAddress } = useContext(providerContext)

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

  useEffect(() => {
    if (klaytnProvider) {
      checkKaikasStatus()
      getKaikasBalance()
    }
  }, [klaytnProvider])

  return (
    <div>
      <button className="mx-8" onClick={connectKaikas}>
        Connect Wallet
      </button>
    </div>
  )
}

export default Wallet
