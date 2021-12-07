require("@nomiclabs/hardhat-waffle");
require("dotenv").config()
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.URL_ID_MONBAI_MAINET}`,
      accounts: [process.env.WALLET_ACCOUNT_PRIVATE_KEY]
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.URL_ID_MONBAI_MAINET}`,
      accounts: [process.env.WALLET_ACCOUNT_PRIVATE_KEY]
    }
  }
};
