// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Constructor {
  address owner;

  constructor() {
    owner = msg.sender;
  }

  function get() public view returns (address) {
    return owner;
  }
}
