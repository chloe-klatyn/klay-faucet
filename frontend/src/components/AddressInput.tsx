import { useForm } from 'react-hook-form'
import { useState, useContext } from 'react'
import providerContext from '../context/context'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

type FormData = {
  recipient: string
}

const Input = () => {
  const { kaikasAddress } = useContext(providerContext)
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const requestTokens = async () => {
    const receiver = getValues('recipient')
    try {
      const response = await fetch(
        `https://api-baobab.wallet.klaytn.com/faucet/run?address=${receiver}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const res = await response.json()
      console.log('res: ', res)
      if (res.code === 993) {
        console.error('Error requesting funds')
        toast.error('You have reached the request limit. Please try again later.', {
          theme: 'colored',
        })
      } else if (res.code === 0) {
        const tx = res.data.replace(/['"]+/g, '')
        toast.success(toastMessage(tx), { theme: 'colored' })
      }
    } catch (err: any) {
      console.error(err.message)
    }
  }

  const toastMessage = (txcode: string) => (
    <div className="underline ">
      <a href={`https://baobab.scope.klaytn.com/tx/${txcode}`} target="_blank">
        Success! View your transaction here
      </a>
    </div>
  )

  const validateAddress = (input: any) => {
    const prefix = input.slice(0, 2)
    if (input.length === 42 && prefix === '0x') {
      return true
    }
    return false
  }

  return (
    <div className="flex flex-col items-center w-full">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="place-content-center font-body mb-6 tracking-widest w-1/3">
        <label className="mb-4 text-grey-600">Enter KLAY address</label>
        <div className="flex space-x-2">
          <input
            className="rounded-md shadow-sm block px-2 py-2 w-full border border-gray-300"
            type="text"
            {...register('recipient', { required: true, validate: validateAddress })}
            value={kaikasAddress && kaikasAddress}
          />
          <button
            className="items-center rounded-full bg-slate-800 px-4 text-white w-2/5"
            onClick={handleSubmit(requestTokens)}
          >
            Give me KLAY
          </button>
        </div>
        {errors.recipient && errors.recipient.type === 'validate' && (
          <div className="text-amber-600">Please enter a valid address</div>
        )}
      </div>
    </div>
  )
}

export default Input
