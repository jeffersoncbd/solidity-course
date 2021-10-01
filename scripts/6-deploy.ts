import hre from 'hardhat'
import { bigNumberToInt } from '../tools/bigNumberToInt'

async function main() {
  const StorageNumber = await hre.ethers.getContractFactory('StorageNumber')
  const storageNumber = await StorageNumber.deploy()

  await storageNumber.deployed()

  const result = await storageNumber.set(50)
  for(const value in result) {
    (result as unknown as any)[value] = bigNumberToInt((result as unknown as any)[value])
  }
  console.log('Set:', result)
  
  const value = await storageNumber.get()
  console.log('Get:', Number(value._hex))
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
