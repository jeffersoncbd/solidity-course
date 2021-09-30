// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract StorageNumber {
  uint numberStored;

  function set(uint newNumber) public {
    numberStored = newNumber;
  }

  function get() public view returns (uint) {
    return numberStored;
  }
}
