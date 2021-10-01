import hre from 'hardhat'

async function main() {
  const Constructor = await hre.ethers.getContractFactory('Constructor')
  const constructor = await Constructor.deploy()

  await constructor.deployed()

  const address = await constructor.get()
  console.log('Get:', address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
