import React from 'react'
import "./assets/index.css"
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Swap from './components/Swap';

const App = () => {
  return (
    <div className='bg-gray-800 min-h-screen'>
      {/* NAVBAR START */}
      <nav className='h-14 bg-gray-900 text-white shadow-lg'>
        <div className='max-w-7xl px-4 mx-auto flex h-full items-center justify-between'>
          <div>
            <h1 className='text-xl'>
              <span className='font-bold'>
                byte
              </span>
              <span className='font-light'>
                Swap
              </span>
            </h1>
          </div>
          <div>
            <ConnectButton />
          </div>
        </div>
      </nav>
      {/* NAVBAR END */}

      {/* SWAP SECTION START HERE */}

      <div className='max-w-7xl px-4 mx-auto mt-12'>
        <Swap />
      </div>

    </div>
  )
}

export default App