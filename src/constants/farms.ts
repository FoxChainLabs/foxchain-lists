import { ChainId } from '@fox.chain/sdk'
import tokens from './tokens'
import { FarmConfig, QuoteToken } from '../types'

// Current PID is 218

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'FOXLAYER',
    image: '',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Foxlayer token
      [ChainId.BSC]: '0x84a5A0CaB56def6aDAf8Cd591630fEE8FEC6a2f5',
    },
    tokenSymbol: 'FOXLAYER-SPLIT',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Foxlayer Token
      [ChainId.BSC]: '0x84a5A0CaB56def6aDAf8Cd591630fEE8FEC6a2f5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
  },
  {
    pid: 1,
    image: '',
    lpSymbol: 'FOXLAYER-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0x90fc86a7570063a9ea971ec74f01f89569ad6237', // FOXLAYER-BNB FoxlayerPair
      [ChainId.BSC]: '0xF65C1C0478eFDe3c19b49EcBE7ACc57BB6B1D713',
    },
    tokenSymbol: 'FOXLAYER',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a', // Foxlayer Token
      [ChainId.BSC]: '0xa0d46332c75397b6f840bd8bb7cb06bd3ff482e1',
    },
    style: 'featured',
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
  },
  {
    pid: 2,
    image: '',
    lpSymbol: 'FOXLAYER-BUSD',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0xed89477d619c7e73f752d5fc7be60308ceb63663', // FOXLAYER-BUSD FoxlayerPair
      [ChainId.BSC]: '0x7Bd46f6Da97312AC2DBD1749f82E202764C0B914',
    },
    tokenSymbol: 'FOXLAYER',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0x4Fb99590cA95fc3255D9fA66a1cA46c43C34b09a',
      [ChainId.BSC]: '0xa0d46332c75397b6f840bd8bb7cb06bd3ff482e1',
    },
    style: 'featured',
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
  },
  {
    pid: 3,
    image: '',
    lpSymbol: 'BUSD-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0x7a51d580c5d393e281f133e0af0c7156989ca17e', // BUSD-BNB FoxlayerPair
      [ChainId.BSC]: '0x51e6d27fa57373d8d4c256231241053a70cb1d93',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
      [ChainId.BSC]: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
  },
  {
    pid: 5,
    image: '',
    lpSymbol: 'ETH-BNB',
    lpAddresses: {
      [ChainId.BSC_TESTNET]: '0x66dc37a4efe740d20e13ebc6bf6b238d9655cbbc', // ETH-BNB FoxlayerPair
      [ChainId.BSC]: '0xA0C3Ef24414ED9C9B456740128d8E63D016A9e11',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      [ChainId.BSC_TESTNET]: '0xd66c6b4f0be8ce5b39d52e0fd1344c389929b378', // Binance Peg ETH
      [ChainId.BSC]: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
  }
  
]

export default farms