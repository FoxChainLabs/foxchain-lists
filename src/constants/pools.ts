import BigNumber from 'bignumber.js'
import { ChainId } from '@fox.chain/sdk'
import { PoolConfig, PoolCategory } from '../types'
import tokens from './tokens'

const FOXLAYER_PER_BLOCK = new BigNumber(10)

// Current Sous ID is 236

const pools: PoolConfig[] = [
  // MASTER APE V2 POOL
  {
    sousId: 0,
    tokenName: tokens.foxlayer.symbol,
    stakingToken: tokens.foxlayer,
    rewardToken: tokens.foxlayer,
    contractAddress: {
      [ChainId.BSC]: '0x19d1F73a59dcE256d1083C3103DD2415678BdCa8', // MasterApe
      [ChainId.BSC_TESTNET]: '',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://foxchain.app/',
    twitter: 'https://twitter.com/FoxchainLabs',
    audit: 'https://blocksafu.com/project-detail/0xa0d46332C75397b6f840Bd8bB7cB06bD3ff482E1',
    harvest: true,
    tokenPerBlock: `${FOXLAYER_PER_BLOCK.toNumber() * 0.25}`,
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },

  // LEGACY POOL
  // Making sousId 999 for easy configuration
  {
    sousId: 999,
    tokenName: tokens.foxlayer.symbol,
    stakingToken: tokens.foxlayer,
    rewardToken: tokens.foxlayer,
    contractAddress: {
      [ChainId.BSC_TESTNET]: '0xbbC5e1cD3BA8ED639b00927115e5f0e0040aA613', // MasterApe
      [ChainId.BSC]: '0xE1c55e983E764E3f2D29B301f4F929ABa6c6aBCB',
    },
    poolCategory: PoolCategory.CORE,

    projectLink: 'https://foxchain.app/',
    twitter: 'https://twitter.com/FoxchainLabs',
    audit: 'https://blocksafu.com/project-detail/0xa0d46332C75397b6f840Bd8bB7cB06bD3ff482E1',
    harvest: true,
    tokenPerBlock: `${FOXLAYER_PER_BLOCK.toNumber() * 0.25}`,
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },

  {
    sousId: 21,
    tokenName: 'FOX',
    image: 'FOX.svg',
    stakingToken: tokens.foxc,
    rewardToken: tokens.foxc,
    contractAddress: {
      [ChainId.BSC_TESTNET]: '', // ApeRewardPool
      [ChainId.BSC]: '0xE1c55e983E764E3f2D29B301f4F929ABa6c6aBCB',
    },
    poolCategory: PoolCategory.APEZONE,
    projectLink: 'https://foxchain.app/foxzone',
    twitter: 'https://twitter.com/FoxchainLabs',
    audit: 'https://blocksafu.com/project-detail/0xa0d46332C75397b6f840Bd8bB7cB06bD3ff482E1',
    harvest: true,
    tokenPerBlock: `0.150000000000000000`,
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  }
 
]

export default pools
