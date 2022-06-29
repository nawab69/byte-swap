import {
    getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
    [chain.mainnet, chain.rinkeby, chain.ropsten, chain.polygon, chain.polygonMumbai],
    [
        alchemyProvider({ alchemyId: "Vuhh3nEULYFYOOUxqXOZZ4RTDNoWsFWt" }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'byteSwap',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})

export { wagmiClient, chains };
