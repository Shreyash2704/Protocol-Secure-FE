import arbitumlogo from "../assets/chains/arbitrum.svg";
import baselogo from "../assets/chains/base.svg";
import bsclogo from "../assets/chains/bsc.svg";
import ethereumlogo from "../assets/chains/etherum_2.svg";
import polygonlogo from "../assets/chains/polygon.svg";
import scrolllogo from "../assets/chains/scroll.svg";
import mantlelogo from "../assets/chains/mantle.svg";
import sepolialogo from "../assets/coins/sepolia.png";
import selectLogo from "../assets/chains/select.png";
import morphlogo from '../assets/chains/Morph.png';
import karakotlogo from '../assets/chains/karokat-logo.svg'
import berachianlogo from '../assets/chains/Berachain.svg' 
import movementLogo from '../assets/chains/movement-testnet-token.svg'
import abstractLogo from '../assets/chains/abstract.png'
import sonieumLogo from '../assets/chains/soneium.jpg'
import { ImageMapType, Networks } from "./types";
import protoIcon from '../assets/app/header/logo.svg'

const iconMap: ImageMapType = {
  "42161": arbitumlogo,
  "8453": baselogo,
  "56": bsclogo,
  "1": ethereumlogo,
  "137": polygonlogo,
  "534352": scrolllogo,
  "5000": mantlelogo,
  "11155111": ethereumlogo,
  "421614": arbitumlogo,
  "84532":baselogo,
  "2810":morphlogo,
  "920637907288165":karakotlogo,
  "80084":berachianlogo,
  "30732":movementLogo,
  "11124":abstractLogo,
  "MOVE":movementLogo,
  "BERA":berachianlogo,
  "ETH":ethereumlogo,
  "MATIC":polygonlogo,
  "1946":sonieumLogo
};
const ChainJsonData: Networks = {
  "1": {
    networkName: "ethereum",
    chainID: 1,
    baseToken: "ETH",
    decimals: 18,
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
  },
  "11155111": {
    "networkName": "ethsepolia",
    "chainID":11155111,
    "baseToken": "ETH",
    "decimals":18,
    "rpc": "https://ethereum-sepolia-rpc.publicnode.com",
    "feedaddress": "0x0000000000000000000000000000000000000000",
    "routerContract":"0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    "liquidityPool":"0x4aB0137be5cb4b8EB6a755e4c16243724Bf44dC2",
    "priceProvider":"https://api.bybit.com/v5/market/tickers?category=spot&symbol=ETHUSDT",
    "platformFeePercentage":1,
    "gweiLimit":100000,
    "isGasByLifi":false,
    "minimumGas":0.0001,
    "explorer":"https://sepolia.etherscan.io/tx/",
    "explorerAddress":"https://sepolia.etherscan.io/address/",
  },
  "8453": {
    networkName: "base",
    chainID: 8453,
    baseToken: "ETH",
    decimals: 18,
    rpc: "https://rpc.ankr.com/base",
    feedaddress: "0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70",
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    platformFeePercentage: 2.5,
    gweiLimit: 1000000,
    isGasByLifi: true,
    explorer: "https://basescan.org/tx/",
    explorerAddress:"https://basescan.org/address/"
  },
  "137": {
    networkName: "polygon",
    chainID: 137,
    baseToken: "MATIC",
    decimals: 18,
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
  },
  "42161": {
    networkName: "arbitrum",
    chainID: 42161,
    baseToken: "ETH",
    decimals: 18,
    rpc: "https://rpc.ankr.com/arbitrum",
    feedaddress: "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612",
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    platformFeePercentage: 2.5,
    gweiLimit: 1000000,
    isGasByLifi: true,
    explorer: "https://arbiscan.io/tx/",
    explorerAddress:"https://arbiscan.io/address/"
  },
  "56": {
    networkName: "bsc",
    chainID: 56,
    baseToken: "BNB",
    decimals: 18,
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
  },
  "534352": {
    networkName: "scroll",
    chainID: 534352,
    baseToken: "ETH",
    decimals: 18,
    rpc: "https://1rpc.io/scroll",
    feedaddress: "0x6bF14CB0A831078629D993FDeBcB182b21A8774C",
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    liquidityPool: "0x4aB0137be5cb4b8EB6a755e4c16243724Bf44dC2",
    platformFeePercentage: 2.5,
    gweiLimit: 1000000,
    isGasByLifi: true,
    minimumGas: 0.001,
    explorer: "https://scrollscan.com/tx/",
    explorerAddress: "https://scrollscan.com/address/",
  },
  "5000": {
    networkName: "mantle",
    chainID: 5000,
    baseToken: "MNT",
    decimals: 18,
    rpc: "https://rpc.mantle.xyz",
    feedaddress: "0x6bF14CB0A831078629D993FDeBcB182b21A8774C",
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    liquidityPool: "0x4aB0137be5cb4b8EB6a755e4c16243724Bf44dC2",
    platformFeePercentage: 2.5,
    gweiLimit: 1000000,
    isGasByLifi: false,
    minimumGas: 0.001,
    explorer: "https://mantlescan.info/tx/",
    explorerAddress: "https://mantlescan.info/address/",
  },
  84532: {
    networkName: "basesepolia",
    chainID: 84532,
    baseToken: "ETH",
    decimals: 18,
    rpc: "https://base-sepolia-rpc.publicnode.com",
    feedaddress: "0x0000000000000000000000000000000000000000",
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    liquidityPool: "0x4aB0137be5cb4b8EB6a755e4c16243724Bf44dC2",
    priceProvider:
      "https://api.bybit.com/v5/market/tickers?category=spot&symbol=ETHUSDT",
    platformFeePercentage: 1,
    gweiLimit: 100000,
    isGasByLifi: false,
    minimumGas: 0.0001,
    explorer: "https://sepolia.basescan.org/tx/",
    explorerAddress: "https://sepolia.basescan.org/address/",
  },
  421614: {
    networkName: "arbitrumsepolia",
    chainID: 421614,
    baseToken: "ETH",
    decimals: 18,
    rpc: "https://sepolia-rollup.arbitrum.io/rpc",
    feedaddress: "0x0000000000000000000000000000000000000000",
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    liquidityPool: "0x4aB0137be5cb4b8EB6a755e4c16243724Bf44dC2",
    priceProvider:
      "https://api.bybit.com/v5/market/tickers?category=spot&symbol=ETHUSDT",
    platformFeePercentage: 1,
    gweiLimit: 400000,
    isGasByLifi: false,
    minimumGas: 0.0001,
    explorer: "https://sepolia.arbiscan.io/tx/",
    explorerAddress: "https://sepolia.arbiscan.io/address/",
  },
  2810: {
    networkName: "morphtestnet",
    chainID: 2810,
    baseToken: "ETH",
    decimals: 18,
    rpc: "https://rpc-holesky.morphl2.io",
    feedaddress: "0x0000000000000000000000000000000000000000",
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    liquidityPool: "0x4aB0137be5cb4b8EB6a755e4c16243724Bf44dC2",
    priceProvider:
      "https://api.bybit.com/v5/market/tickers?category=spot&symbol=ETHUSDT",
    platformFeePercentage: 1,
    gweiLimit: 400000,
    isGasByLifi: false,
    minimumGas: 0.001,
    explorer: "https://explorer-holesky.morphl2.io/tx/",
    explorerAddress: "https://explorer-holesky.morphl2.io/address/"
  },
  30732: {
    networkName: "movetestnet",
    chainID: 30732,
    baseToken: "MOVE",
    decimals: 18,
    rpc: "https://mevm.testnet.imola.movementlabs.xyz",
    feedaddress: "0x0000000000000000000000000000000000000000",
    priceProvider:
      "https://api.bybit.com/v5/market/tickers?category=spot&symbol=MNTUSDT",
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    liquidityPool: "0x4aB0137be5cb4b8EB6a755e4c16243724Bf44dC2",
    platformFeePercentage: 1,
    gweiLimit: 400000,
    isGasByLifi: false,
    minimumGas: 0.001,
    explorer: "https://explorer.devnet.imola.movementlabs.xyz/#/txn/",
    explorerAddress: "https://explorer.devnet.imola.movementlabs.xyz/#/account/",
  },
  920637907288165: {
    networkName: "kakarottestnet",
    chainID: 920637907288165,
    baseToken: "ETH",
    decimals: 18,
    rpc: "https://sepolia-rpc.kakarot.org",
    feedaddress: "0x0000000000000000000000000000000000000000",
    priceProvider:
      "https://api.bybit.com/v5/market/tickers?category=spot&symbol=ETHUSDT",
    routerContract: "0x45Ae6f1998F48e4feD718958c657becDFF5fF925",
    liquidityPool: "0x772F0d0798a1C798C8fB0AC876443B9C855ead55",
    platformFeePercentage: 1,
    gweiLimit: 400000,
    isGasByLifi: false,
    minimumGas: 0.001,
    explorer: "https://sepolia.kakarotscan.org/tx/",
    explorerAddress: "https://sepolia.kakarotscan.org/address/",
  },
  80084: {
    networkName: "berachaintestnet",
    chainID: 80084,
    baseToken: "BERA",
    decimals: 18,
    rpc: "https://bartio.rpc.berachain.com",
    feedaddress: "0x0000000000000000000000000000000000000000",
    priceProvider:
      "https://api.bybit.com/v5/market/tickers?category=spot&symbol=MNTUSDT",
    routerContract: "0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
    liquidityPool: "0x4aB0137be5cb4b8EB6a755e4c16243724Bf44dC2",
    platformFeePercentage: 1,
    gweiLimit: 400000,
    isGasByLifi: false,
    minimumGas: 0.001,
    explorer: "https://bartio.beratrail.io/tx/",
    explorerAddress: "https://bartio.beratrail.io/address/",
  },
  11124:{
    "networkName": "abstracttestnet",
    "chainID":11124,
    "baseToken": "ETH",
    "decimals":18,
    "rpc": "https://api.testnet.abs.xyz",
    "feedaddress": "0x0000000000000000000000000000000000000000",
    "routerContract":"0x4A582f484A028E5BFD1b550e034F9822523cE65C",
    "liquidityPool":"0xF142c6e793A6673132DFceb7c3224A51adA5C792",
    "priceProvider":"https://api.bybit.com/v5/market/tickers?category=spot&symbol=ETHUSDT",
    "platformFeePercentage":1,
    "gweiLimit":100000,
    "isGasByLifi":false,
    "minimumGas":0.0001,
    "explorer":"https://explorer.testnet.abs.xyz/tx/",
    explorerAddress: "https://explorer.testnet.abs.xyz/address/",
 },
 1946:{
  "networkName": "soneiumTestnet",
  "chainID":1946,
  "baseToken": "ETH",
  "decimals":18,
  "rpc": "https://rpc.minato.soneium.org",
  "feedaddress": "0x0000000000000000000000000000000000000000",
  "routerContract":"0x7E9b9560bdd2fC749E0DA75573B9300C8Cc24F6f",
  "liquidityPool":"0x4aB0137be5cb4b8EB6a755e4c16243724Bf44dC2",
  "priceProvider":"https://api.bybit.com/v5/market/tickers?category=spot&symbol=ETHUSDT",
  "platformFeePercentage":1,
  "gweiLimit":600000,
  "isGasByLifi":false,
  "minimumGas":0.0001,
  "explorer":"https://explorer-testnet.soneium.org/tx/",
  "explorerAddress":"https://explorer-testnet.soneium.org/address/"
 }
};
const MAINTAINER_ENUM = {
  GOV: {
    'address':'0x875C02095ABB53428aa56A59FE6C8E712F48C762',
    'label':'governance',
    'icon':protoIcon,
  },
  SEAL911:{
    'address':'0x875C02095ABB53428aa56A59FE6C8E712F48C762',
    'label':'Seal 911',
    icon:protoIcon
  },
  PROTO_SECURE:{
    'address':'0x875C02095ABB53428aa56A59FE6C8E712F48C762',
    'label':'Proto Secure',
    'icon':protoIcon
  } ,
  NOUNS_DOA:{
    'lable':'nouns doa',
    'address':'0x875C02095ABB53428aa56A59FE6C8E712F48C762',
    'icon':protoIcon
  }
};

export { iconMap, ChainJsonData, MAINTAINER_ENUM };
