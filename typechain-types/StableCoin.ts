/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface StableCoinInterface extends utils.Interface {
  functions: {
    "INITIAL_COLLATERAL_RATIO_PERCENTAGE()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "deposit(address)": FunctionFragment;
    "depositCollateralBuffer()": FunctionFragment;
    "depositorCoin()": FunctionFragment;
    "feeRatePercentage()": FunctionFragment;
    "mint()": FunctionFragment;
    "name()": FunctionFragment;
    "oracle()": FunctionFragment;
    "redeem(uint256)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "withdrawCollateralBuffer(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "INITIAL_COLLATERAL_RATIO_PERCENTAGE"
      | "allowance"
      | "approve"
      | "balanceOf"
      | "burn"
      | "decimals"
      | "deposit"
      | "depositCollateralBuffer"
      | "depositorCoin"
      | "feeRatePercentage"
      | "mint"
      | "name"
      | "oracle"
      | "redeem"
      | "symbol"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "withdrawCollateralBuffer"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "INITIAL_COLLATERAL_RATIO_PERCENTAGE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "deposit", values: [string]): string;
  encodeFunctionData(
    functionFragment: "depositCollateralBuffer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "depositorCoin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeRatePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "mint", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "oracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "redeem",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawCollateralBuffer",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "INITIAL_COLLATERAL_RATIO_PERCENTAGE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositCollateralBuffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "depositorCoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeRatePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oracle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawCollateralBuffer",
    data: BytesLike
  ): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
  owner: string;
  spender: string;
  value: BigNumber;
}
export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber],
  ApprovalEventObject
>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface StableCoin extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StableCoinInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    INITIAL_COLLATERAL_RATIO_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    burn(
      burnStableCoinAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    deposit(
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositCollateralBuffer(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositorCoin(overrides?: CallOverrides): Promise<[string]>;

    feeRatePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    mint(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    oracle(overrides?: CallOverrides): Promise<[string]>;

    redeem(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdrawCollateralBuffer(
      burnDepositorCoinAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  INITIAL_COLLATERAL_RATIO_PERCENTAGE(
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  allowance(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(
    burnStableCoinAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  deposit(
    to: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositCollateralBuffer(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositorCoin(overrides?: CallOverrides): Promise<string>;

  feeRatePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  mint(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  oracle(overrides?: CallOverrides): Promise<string>;

  redeem(
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdrawCollateralBuffer(
    burnDepositorCoinAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    INITIAL_COLLATERAL_RATIO_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      burnStableCoinAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    deposit(to: string, overrides?: CallOverrides): Promise<void>;

    depositCollateralBuffer(overrides?: CallOverrides): Promise<void>;

    depositorCoin(overrides?: CallOverrides): Promise<string>;

    feeRatePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    mint(overrides?: CallOverrides): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    oracle(overrides?: CallOverrides): Promise<string>;

    redeem(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;

    withdrawCollateralBuffer(
      burnDepositorCoinAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Approval(address,address,uint256)"(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;
    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null
    ): ApprovalEventFilter;

    "Transfer(address,address,uint256)"(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    INITIAL_COLLATERAL_RATIO_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(
      burnStableCoinAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositCollateralBuffer(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositorCoin(overrides?: CallOverrides): Promise<BigNumber>;

    feeRatePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    mint(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    oracle(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdrawCollateralBuffer(
      burnDepositorCoinAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    INITIAL_COLLATERAL_RATIO_PERCENTAGE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    burn(
      burnStableCoinAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      to: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositCollateralBuffer(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositorCoin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeRatePercentage(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    mint(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    redeem(
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdrawCollateralBuffer(
      burnDepositorCoinAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
