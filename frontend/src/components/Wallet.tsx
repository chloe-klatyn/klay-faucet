import { useEffect, useContext } from 'react'
import providerContext from '../context/context'

const Wallet = () => {
  const { klaytnProvider } = useContext(providerContext)

  const connectKaikas = async () => {
    try {
      const accounts = await klaytnProvider.enable()
      console.log('accounts: ', accounts)
    } catch (error: any) {
      console.error(error.message)
    }
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
