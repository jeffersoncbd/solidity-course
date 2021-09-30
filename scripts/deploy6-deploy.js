
const hre = require('hardhat')

async function main() {
  const Greeter = await hre.ethers.getContractFactory('StorageNumber')
  const greeter = await Greeter.deploy()

  await greeter.deployed()

  await greeter.set(50)
  const value = await greeter.get()

  console.log('StorageNumber deployed to:', greeter.address)
  console.log('Value:', Number(value._hex))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
