interface BigNumber {
  _hex: string
  _isBigNumber: boolean
}

export function bigNumberToInt(data: BigNumber) {
  if (data !== null && data._isBigNumber) {
    return Number(data._hex)
  } 
  return data
}