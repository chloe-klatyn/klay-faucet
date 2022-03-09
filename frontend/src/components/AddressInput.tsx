import { useForm } from 'react-hook-form'
import { useState } from 'react'

const API_ENDPOINT = process.env.REACT_APP_API_URL

type FormData = {
  receivingAddress: string
}

const Input = () => {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormData>()

  const requestTokens = async () => {
    const receiver = getValues('receivingAddress')
    try {
      const response = await fetch(`${API_ENDPOINT}/faucet/sendKlay`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ receiver: receiver }),
      })
      console.log('res: ', response)
    } catch (err: any) {
      console.error(err.message)
    }
  }

  const validateAddress = (input: any) => {
    const prefix = input.slice(0, 2)
    if (input.length === 42 && prefix === '0x') {
      return true
    }
    return false
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="place-content-center font-body mb-6 tracking-widest w-1/3">
        <div className="flex space-x-2">
          <input
            className="rounded-md shadow-sm block px-2 py-2 w-full border border-gray-300"
            type="text"
            {...register('receivingAddress', { required: true, validate: validateAddress })}
          />
          <button
            className="items-center rounded-full bg-slate-800 px-4 text-white w-2/5"
            onClick={handleSubmit(requestTokens)}
          >
            Give me KLAY
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input
