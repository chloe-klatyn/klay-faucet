import { useState } from 'react'

const API_ENDPOINT = process.env.REACT_APP_API_URL

const Input = () => {
  const [recipientAddress, setRecipientAddress] = useState()

  return (
    <div className="flex flex-col items-center w-full">
      <div className="place-content-center font-body mb-6 tracking-widest w-1/3">
        <div className="flex space-x-2">
          <input
            className="rounded-md shadow-sm block px-2 w-full border border-gray-300"
            type="text"
          />
          <button className="items-center rounded-full bg-slate-800 px-4 text-white w-1/3">
            Give me KLAY
          </button>
        </div>
      </div>
    </div>
  )
}

export default Input
