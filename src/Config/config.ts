import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'
import { defineChain } from 'viem'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})



export const BerachainTestnet = defineChain({
  id: 80084,
  name: 'BerachainBartio',
  nativeCurrency: { name: 'BerachainBartio', symbol: 'BERA', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://bartio.rpc.berachain.com'] },
  },
  blockExplorers: {
    default: { name: 'BerachainBartioscan', url: 'https://bartio.beratrail.io' },
  },
})

export const MorphHolesky = defineChain({
  id: 2810,
  name: 'MorphHolesky',
  nativeCurrency: { name: 'MorphHolesky', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc-holesky.morphl2.io'] },
  },
  blockExplorers: {
    default: { name: 'explorerMorph', url: 'https://explorer-holesky.morphl2.io' },
  },
})

export const MovementTestnet = defineChain({
  id: 30732,
  name: 'Move-EVM',
  nativeCurrency: { name: 'Move-EVM', symbol: 'MOVE', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://mevm.devnet.imola.movementlabs.xyz'] },
  },
  blockExplorers: {
    default: { name: 'MovementTestnetscan', url: 'https://explorer.mevm.devnet.m2.movementlabs.xyz' },
  },
})

export const AbstractTestnet = defineChain({
  id: 11124,
  name: 'AbstractTestnet',
  nativeCurrency: { name: 'AbstractTestnet', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://api.testnet.abs.xyz',] },
  },
  blockExplorers: {
    default: { name: 'AbstractTestnetscan', url: 'https://explorer.testnet.abs.xyz/tx/' },
  },
})

//soneiumTestnet
export const SoneiumTestnet = defineChain({
  id: 1946,
  name: 'SoneiumTestnet',
  nativeCurrency: { name: 'SoneiumTestnet', symbol: 'ETH', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://rpc.minato.soneium.org',] },
  },
  blockExplorers: {
    default: { name: 'SoneiumTestnetScan', url: 'https://explorer-testnet.soneium.org/tx/' },
  },
})

export const kakarotSepolia = /*#__PURE__*/ defineChain({
  id: 920637907288165,
  name: 'Kakarot STRK Sepolia',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://sepolia-rpc.kakarot.org'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Kakarot Scan',
      url: 'https://sepolia.kakarotscan.org',
    },
  },
  testnet: true,
})

export const SwanChain = /*#__PURE__*/ defineChain({
  id: 20241133,
  name: 'Swan chain',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc-proxima.swanchain.io/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Kakarot Scan',
      url: 'https://rpc-proxima.swanchain.io/',
    },
  },
  testnet: true,
})

export const IncoChain = /*#__PURE__*/ defineChain({
  id: 20241133,
  name: 'Inco',
  nativeCurrency: {
    name: 'inco',
    symbol: 'INCO',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://validator.rivest.inco.org/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Inco Scan',
      url: 'https://rpc-proxima.swanchain.io/',
    },
  },
  testnet: true,
})

export const CeloChain = /*#__PURE__*/ defineChain({
  id: 44787,
  name: 'Celo',
  nativeCurrency: {
    name: 'celo',
    symbol: 'CELO',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://alfajores-forno.celo-testnet.org/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Inco Scan',
      url: 'https://rpc-proxima.swanchain.io/',
    },
  },
  testnet: true,
})

//Zircuit
export const ZircuitTestnet = /*#__PURE__*/ defineChain({
  id: 48899,
  name: 'Zircuit',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://alfajores-forno.celo-testnet.org/'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Inco Scan',
      url: 'https://rpc-proxima.swanchain.io/',
    },
  },
  testnet: true,
})