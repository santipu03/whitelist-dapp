const { network } = require("hardhat")
const { verify } = require("../utils/verify")

developmentChains = ["hardhat", "localhost"]

module.exports = async ({ deployments, getNamedAccounts }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    const args = [10]

    const whitelist = await deploy("Whitelist", {
        from: deployer,
        args: args,
        log: true,
    })

    log(`Whitelist contract address: ${whitelist.address}`)

    if (!developmentChains.includes(network.name && process.env.EHTERSCAN_API_KEY)) {
        await verify(whitelist.address, args)
    }

    log("--------------------------------------")
}
