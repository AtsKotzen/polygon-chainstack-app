const chainstackPolygon = process.env.CHAINSTACK_NODE_URL
const address = process.env.WALLET_ADDRESS
const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider(chainstackPolygon))

const getBlockNumber = async (err, res) => {
    const blockNumber = await web3.eth.getBlockNumber()
    if (err) {
        console.log(err)
    } else {
        console.log("Block Number: " + blockNumber)
    }
    getBlockData(blockNumber)
}

const getBlockData = async(blockNumber) => {
  let blkData = await web3.eth.getBlock(blockNumber)
  try {    
    console.log("Block data: ", blkData)  
  
  } catch (error) {
    console.log(error)
  }  
}

const getBalanceFromAddress = () => {
  web3.eth.getBalance(address, function (err, result) {
    if (err) {
      console.log(err)
    } else {
      let ethAmount = (web3.utils.fromWei(result, "ether"))
      console.log("Wallet Address: " + address)
      console.log("Ballance: " + ethAmount + " MATIC")
    }
  })
}

module.exports = { getBlockNumber, getBalanceFromAddress, getBlockData }