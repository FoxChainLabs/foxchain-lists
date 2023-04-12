import { ChainId } from '@fox.chain/sdk'
import { FarmConfig, QuoteToken } from '../types'
import tokens from './tokens'

// Highest Farm ID: 67

const farmsV2: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: tokens.foxlayer.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.foxlayer.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.foxlayer.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.foxlayer.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.foxlayer.address,
  },
  {
    pid: 6,
    lpSymbol: tokens.foxlayerBnb.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.foxlayerBnb.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.foxlayer.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.foxlayer.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: tokens.wbnb.address,
  },
  {
    pid: 7,
    lpSymbol: tokens.foxlayerBusd.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.foxlayerBusd.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.foxlayer.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.foxlayer.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
  },
  {
    pid: 8,
    lpSymbol: tokens.bnbBusd.symbol,
    lpAddresses: {
      [ChainId.BSC]: tokens.bnbBusd.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    tokenSymbol: tokens.wbnb.symbol,
    tokenAddresses: {
      [ChainId.BSC]: tokens.wbnb.address[ChainId.BSC],
      [ChainId.BSC_TESTNET]: '',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: tokens.busd.address,
  },
 
]

export default farmsV2