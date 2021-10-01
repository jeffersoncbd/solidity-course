import hre from 'hardhat'
import { bigNumberToInt } from '../tools/bigNumberToInt'

async function main() {
  const Greeter = await hre.ethers.getContractFactory('StorageNumber')
  const greeter = await Greeter.deploy()

  await greeter.deployed()

  const result = await greeter.set(50)
  for(const value in result) {
    (result as unknown as any)[value] = bigNumberToInt((result as unknown as any)[value])
  }
  console.log('Set:', result)
  
  const value = await greeter.get()
  console.log('Get:', Number(value._hex))

  console.log('StorageNumber deployed to:', greeter.address)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
