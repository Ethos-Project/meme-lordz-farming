// 42 - Testnet
// 4 - Rinkeby
// 1 - Mainnet

/*
1 Mainnet
3 Ropsten
4 Rinkeby
5 Goerli
42 Kovan
56 Binance Smart Chain Mainnet
97 Binance Smart Chain Testnet
100 xDai
137 Matic
1287 Moonbase Testnet
80001 Matic Testnet
43113 Avalanche Testnet
43114 Avalanche Mainnet
*/

export const contractAddresses = {
  erc20: {
    97: '0x4B74e109E8b0d03226224Ef2746F8C13e4c59cD4',
    56: '0x4B74e109E8b0d03226224Ef2746F8C13e4c59cD4',
    42: '0x9C821fF00DBb2D3D2C908f39bB497766eac2d8c6',
    4: '0x7D08Dc5285A06c21aC5f4742C31B9D097607aaBc',
    1: '0x3db6ba6ab6f95efed1a6e794cad492faaabf294d',
  },
  erc20v2: {
    97: '0x4B74e109E8b0d03226224Ef2746F8C13e4c59cD4',
    56: '0x4B74e109E8b0d03226224Ef2746F8C13e4c59cD4',
    42: '0xbFd181cb0c8E23b65805Dded3863Dce6517402A7',
    4: '0xc6fDe3FD2Cc2b173aEC24cc3f267cb3Cd78a26B7',
    1: '0xd01409314acb3b245cea9500ece3f6fd4d70ea30',
  },
  farm: {
    97: '0x9d0CfBC3ccD51563995873B6a7F0d85cBcdDeB5E',
    56: '0x9d0CfBC3ccD51563995873B6a7F0d85cBcdDeB5E',
    42: '0xbFd181cb0c8E23b65805Dded3863Dce6517402A7',
    4: '0x0030A8A46AEA824eCA127F36d449D654cC8AC8A6',
    1: '0xbfd181cb0c8e23b65805dded3863dce6517402a7',
  },
  weth: {
    97: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    42: '0xf3a6679b266899042276804930b3bfbaf807f15b',
    4: '0x2fcc4dba284dcf665091718e4d0dab53a416dfe7',
    1: '0x9cd7403ac4856071581e1f5a298317d9a72a19cf',
  },
}

export const supportedPools = [
  {
    id: 'ETHOS',
    version: 'V1',
    name: 'ETHOS BEP-20',
    pid: 0,
    lpAddresses: {
      97: '0xcf70687511D847E5A702B0aA8A537cd352a7257d',
      56: '0xcf70687511D847E5A702B0aA8A537cd352a7257d',
      42: '0x74414F027FDCda5DaacFa4d35F29C0d6c5020776',
      4: '0x7D721dDB45C1eaCceD8Dc4a3698a21b93eb7f9c3',
      1: '0x9cd7403ac4856071581e1f5a298317d9a72a19cf',
    },
    tokenAddresses: { ...contractAddresses.erc20 },
    symbol: 'ETHOS-BNB LP',
    tokenSymbol: 'CAKE LP',
    icon: '',
    pool: '100%',
  }
]
