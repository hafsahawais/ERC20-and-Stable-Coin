/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC20, ERC20Interface } from "../ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200191e3803806200191e833981810160405281019062000037919062000429565b81600190805190602001906200004f929190620001dc565b50806002908051906020019062000068929190620001dc565b50620000843368056bc75e2d631000006200008c60201b60201c565b505062000659565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603620000fe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000f5906200050f565b60405180910390fd5b806000808282546200011191906200056a565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546200016991906200056a565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620001d09190620005d8565b60405180910390a35050565b828054620001ea9062000624565b90600052602060002090601f0160209004810192826200020e57600085556200025a565b82601f106200022957805160ff19168380011785556200025a565b828001600101855582156200025a579182015b82811115620002595782518255916020019190600101906200023c565b5b5090506200026991906200026d565b5090565b5b80821115620002885760008160009055506001016200026e565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620002f582620002aa565b810181811067ffffffffffffffff82111715620003175762000316620002bb565b5b80604052505050565b60006200032c6200028c565b90506200033a8282620002ea565b919050565b600067ffffffffffffffff8211156200035d576200035c620002bb565b5b6200036882620002aa565b9050602081019050919050565b60005b838110156200039557808201518184015260208101905062000378565b83811115620003a5576000848401525b50505050565b6000620003c2620003bc846200033f565b62000320565b905082815260208101848484011115620003e157620003e0620002a5565b5b620003ee84828562000375565b509392505050565b600082601f8301126200040e576200040d620002a0565b5b815162000420848260208601620003ab565b91505092915050565b6000806040838503121562000443576200044262000296565b5b600083015167ffffffffffffffff8111156200046457620004636200029b565b5b6200047285828601620003f6565b925050602083015167ffffffffffffffff8111156200049657620004956200029b565b5b620004a485828601620003f6565b9150509250929050565b600082825260208201905092915050565b7f6d696e7420746f207a65726f2061646472657373000000000000000000000000600082015250565b6000620004f7601483620004ae565b91506200050482620004bf565b602082019050919050565b600060208201905081810360008301526200052a81620004e8565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620005778262000531565b9150620005848362000531565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620005bc57620005bb6200053b565b5b828201905092915050565b620005d28162000531565b82525050565b6000602082019050620005ef6000830184620005c7565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200063d57607f821691505b602082108103620006535762000652620005f5565b5b50919050565b6112b580620006696000396000f3fe60806040526004361061009c5760003560e01c806370a082311161006457806370a082311461019c57806395d89b41146101d9578063a9059cbb14610204578063db006a7514610241578063dd62ed3e1461026a578063f340fa01146102a75761009c565b806306fdde03146100a1578063095ea7b3146100cc57806318160ddd1461010957806323b872dd14610134578063313ce56714610171575b600080fd5b3480156100ad57600080fd5b506100b66102c3565b6040516100c39190610c5f565b60405180910390f35b3480156100d857600080fd5b506100f360048036038101906100ee9190610d1a565b610351565b6040516101009190610d75565b60405180910390f35b34801561011557600080fd5b5061011e6104b1565b60405161012b9190610d9f565b60405180910390f35b34801561014057600080fd5b5061015b60048036038101906101569190610dba565b6104b7565b6040516101689190610d75565b60405180910390f35b34801561017d57600080fd5b5061018661061d565b6040516101939190610e29565b60405180910390f35b3480156101a857600080fd5b506101c360048036038101906101be9190610e44565b610626565b6040516101d09190610d9f565b60405180910390f35b3480156101e557600080fd5b506101ee61063e565b6040516101fb9190610c5f565b60405180910390f35b34801561021057600080fd5b5061022b60048036038101906102269190610d1a565b6106cc565b6040516102389190610d75565b60405180910390f35b34801561024d57600080fd5b5061026860048036038101906102639190610e71565b6106e1565b005b34801561027657600080fd5b50610291600480360381019061028c9190610e9e565b6106fa565b60405161029e9190610d9f565b60405180910390f35b6102c160048036038101906102bc9190610e44565b61071f565b005b600180546102d090610f0d565b80601f01602080910402602001604051908101604052809291908181526020018280546102fc90610f0d565b80156103495780601f1061031e57610100808354040283529160200191610349565b820191906000526020600020905b81548152906001019060200180831161032c57829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036103c1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103b890610f8a565b60405180910390fd5b81600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258460405161049f9190610d9f565b60405180910390a36001905092915050565b60005481565b600080600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508281101561057c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057390610ff6565b60405180910390fd5b82816105889190611045565b600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061061385858561072c565b9150509392505050565b60006012905090565b60036020528060005260406000206000915090505481565b6002805461064b90610f0d565b80601f016020809104026020016040519081016040528092919081815260200182805461067790610f0d565b80156106c45780601f10610699576101008083540402835291602001916106c4565b820191906000526020600020905b8154815290600101906020018083116106a757829003601f168201915b505050505081565b60006106d933848461072c565b905092915050565b6106ec3330836104b7565b506106f73082610938565b50565b6004602052816000526040600020602052806000526040600020600091509150505481565b6107298134610a7f565b50565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361079c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610793906110c5565b60405180910390fd5b6000600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050828111610822576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081990611131565b60405180910390fd5b828161082e9190611045565b600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555082600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546108c09190611151565b925050819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040516109249190610d9f565b60405180910390a360019150509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036109a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099e906111f3565b60405180910390fd5b806000808282546109b89190611045565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610a0e9190611045565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610a739190610d9f565b60405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610aee576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae59061125f565b60405180910390fd5b80600080828254610aff9190611151565b9250508190555080600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b559190611151565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bba9190610d9f565b60405180910390a35050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610c00578082015181840152602081019050610be5565b83811115610c0f576000848401525b50505050565b6000601f19601f8301169050919050565b6000610c3182610bc6565b610c3b8185610bd1565b9350610c4b818560208601610be2565b610c5481610c15565b840191505092915050565b60006020820190508181036000830152610c798184610c26565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cb182610c86565b9050919050565b610cc181610ca6565b8114610ccc57600080fd5b50565b600081359050610cde81610cb8565b92915050565b6000819050919050565b610cf781610ce4565b8114610d0257600080fd5b50565b600081359050610d1481610cee565b92915050565b60008060408385031215610d3157610d30610c81565b5b6000610d3f85828601610ccf565b9250506020610d5085828601610d05565b9150509250929050565b60008115159050919050565b610d6f81610d5a565b82525050565b6000602082019050610d8a6000830184610d66565b92915050565b610d9981610ce4565b82525050565b6000602082019050610db46000830184610d90565b92915050565b600080600060608486031215610dd357610dd2610c81565b5b6000610de186828701610ccf565b9350506020610df286828701610ccf565b9250506040610e0386828701610d05565b9150509250925092565b600060ff82169050919050565b610e2381610e0d565b82525050565b6000602082019050610e3e6000830184610e1a565b92915050565b600060208284031215610e5a57610e59610c81565b5b6000610e6884828501610ccf565b91505092915050565b600060208284031215610e8757610e86610c81565b5b6000610e9584828501610d05565b91505092915050565b60008060408385031215610eb557610eb4610c81565b5b6000610ec385828601610ccf565b9250506020610ed485828601610ccf565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610f2557607f821691505b602082108103610f3857610f37610ede565b5b50919050565b7f617070726f766520746f207a65726f2061646472657373000000000000000000600082015250565b6000610f74601783610bd1565b9150610f7f82610f3e565b602082019050919050565b60006020820190508181036000830152610fa381610f67565b9050919050565b7f616d6f756e74206578636565647320616c6c6f77616e63650000000000000000600082015250565b6000610fe0601883610bd1565b9150610feb82610faa565b602082019050919050565b6000602082019050818103600083015261100f81610fd3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061105082610ce4565b915061105b83610ce4565b92508282101561106e5761106d611016565b5b828203905092915050565b7f7472616e7366657220746f20746865207a65726f206164647265737300000000600082015250565b60006110af601c83610bd1565b91506110ba82611079565b602082019050919050565b600060208201905081810360008301526110de816110a2565b9050919050565b7f7472616e7366657220616d6f756e7420657863656564732062616c616e636500600082015250565b600061111b601f83610bd1565b9150611126826110e5565b602082019050919050565b6000602082019050818103600083015261114a8161110e565b9050919050565b600061115c82610ce4565b915061116783610ce4565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561119c5761119b611016565b5b828201905092915050565b7f6275726e20746f207a65726f2061646472657373000000000000000000000000600082015250565b60006111dd601483610bd1565b91506111e8826111a7565b602082019050919050565b6000602082019050818103600083015261120c816111d0565b9050919050565b7f6d696e7420746f207a65726f2061646472657373000000000000000000000000600082015250565b6000611249601483610bd1565b915061125482611213565b602082019050919050565b600060208201905081810360008301526112788161123c565b905091905056fea26469706673582212205ea83adf49f751be979ccc34d8f955f938e13d2d34f4e7a1bb648517e32e162c64736f6c634300080d0033";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20> {
    return super.deploy(_name, _symbol, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    _name: string,
    _symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_name, _symbol, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
