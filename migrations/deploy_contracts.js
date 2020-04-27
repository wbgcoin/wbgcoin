

var InsightProtocol = artifacts.require("./wbg.sol");



module.exports = function(deployer, network, accounts) {

  deployer.deploy(WorldBridgeCoin, 'WBG', 'WorldBridgeCoin', accounts[0]);

};
