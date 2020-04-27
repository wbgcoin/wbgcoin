var InsightProtocol = artifacts.require("./InsightProtocol.sol");



module.exports = function(deployer, network, accounts) {

  deployer.deploy(InsightProtocol, 'INX', 'InsightProtocol', accounts[0]);

};
