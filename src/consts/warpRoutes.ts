import { TokenStandard, WarpCoreConfig } from '@hyperlane-xyz/sdk';

export const warpRouteConfigs: WarpCoreConfig = {
  tokens: [
    {
      chainName: 'sepolia',
      standard: TokenStandard.EvmHypCollateral,
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
      addressOrDenom: '0x8e131c8aE5BF1Ed38D05a00892b6001a7d37739d',
      collateralAddressOrDenom: '0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238',
      logoURI: '/logos/usdc.png',
      connections: [{ token: 'ethereum|alfajores|0xEbA64c8a9b4a61a9210d5fe7E4375380999C821b' }],
    },
    {
      chainName: 'alfajores',
      standard: TokenStandard.EvmHypSynthetic,
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
      addressOrDenom: '0xEbA64c8a9b4a61a9210d5fe7E4375380999C821b',
      logoURI: '/logos/usdc.png',
      connections: [{ token: 'ethereum|sepolia|0x8e131c8aE5BF1Ed38D05a00892b6001a7d37739d' }],
    },
  ],
};
