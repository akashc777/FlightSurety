var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "effort athlete pencil olympic sauce describe female true tell lawn green slush";

module.exports = {
  networks: {
    development: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://127.0.0.1:7545/", 0, 50);
      },
      network_id: '*',
      gas: 6721975
    }
  },
  compilers: {
    solc: {
      version: "^0.4.24"
    }
  }
};