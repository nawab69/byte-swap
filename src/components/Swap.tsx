import React from 'react'
import { darkTheme, SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'
import { useSigner } from 'wagmi'

const Swap = () => {
    const { data: signer } = useSigner()

    return (
        <div className='flex justify-center'>
            <div className="Uniswap">
                <SwapWidget
                    provider={signer?.provider as any}
                    theme={darkTheme}
                />
            </div>
        </div>
    )
}

export default Swap