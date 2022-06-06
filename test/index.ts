import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { ERC20 } from "../typechain";

describe("MyERC20Contract", function () {
  // type of
  let myERC20Contract: ERC20;
  let someAddress: SignerWithAddress;
  let someOtherAddress: SignerWithAddress;

  beforeEach(async function () {
    // mention contract name in factory
    const ERC20ContractFactory = await ethers.getContractFactory("ERC20");
    myERC20Contract = await ERC20ContractFactory.deploy("Hello", "SYM");
    // make sure that the contract is deployed
    await myERC20Contract.deployed();
    someAddress = (await ethers.getSigners())[1];
    someOtherAddress = (await ethers.getSigners())[2];
  });

  describe("When I have 10 tokens", function () {
    beforeEach(async function () {
      await myERC20Contract.transfer(someAddress.address, 10);
    });
    describe("When I transfer 10 tokens", function () {
      it("should transfer tokens correctly", async function () {
        await myERC20Contract
          .transfer(someOtherAddress.address, 10);
        expect(
          await myERC20Contract.balanceOf(someOtherAddress.address)
        ).to.equal(10);
      });
    });
    describe("When I transfer 15 tokens", function () {
      it("should revert the transaction", async function () {
        await expect(
          myERC20Contract
            .connect(someAddress)
            .transfer(someOtherAddress.address, 15)
        ).to.be.revertedWith("transfer amount exceeds balance");
      });
    });
  });
});
