//SPDX-License-Identifier: Unlicense
pragma solidity 0.8.13;

contract ERC20 {
    // define state variables
    uint256 public totalSupply;
    string public name;
    string public symbol;

    mapping(address => uint) public balanceOf;
    //  maps from owner address to the sender address to the allowance value
    mapping(address => mapping(address => uint)) public allowance;

    event Transfer(address indexed from, address indexed to, uint256 value);
    event Approval(address indexed owner, address indexed spender, uint256 value);

    constructor(string memory _name, string memory _symbol) {
        name = _name;
        symbol = _symbol;

        _mint(msg.sender, 100e18);
    } 

    // hardcode the decimal as a view function
    function decimals() external pure returns (uint8) {
        return 18;
    }
    function _transfer(address sender, address recipient, uint256 amount) private returns (bool) {

        require(recipient != address(0), "transfer to the zero address");

        uint256 senderBalance = balanceOf[sender];

        require(senderBalance > amount, "transfer amount exceeds balance");
        // remove transfer amount from the sender
        balanceOf[sender] = senderBalance - amount;
        // add the amount to the recipient
        balanceOf[recipient] += amount;

        emit Transfer(sender, recipient, amount);

        return true;
    }

    function transfer(address recipient, uint256 amount) external returns (bool) {

       return  _transfer(msg.sender, recipient, amount);
    }

    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {
        
        uint256 currentAllowance = allowance[sender][msg.sender];
        require(currentAllowance >= amount , "amount exceeds allowance");

        allowance[sender][msg.sender] = currentAllowance - amount;

        return _transfer(sender, recipient, amount);
    }

    function approve(address spender, uint256 amount) external returns (bool) {

        require(spender != address(0), "approve to zero address");
        allowance[msg.sender][spender] = amount;

        emit Approval(msg.sender, spender, amount);

        return true;
    }

    // function that mints tokens
    function _mint(address to, uint256 amount) internal {

        require(to != address(0), "mint to zero address");

        totalSupply += amount;
        balanceOf[to] += amount;

        emit Transfer(address(0), to, amount);
    }

    function _burn(address from, uint256 amount) internal {

        require(from != address(0), "burn to zero address");

        totalSupply -= amount;
        balanceOf[from] -= amount;

        emit Transfer(address(0), from, amount);
    }

    function deposit (address to) external payable {

        _mint(to, msg.value);
    }

    function redeem (uint256 amount) external {

        transferFrom(msg.sender, address(this), amount);
        _burn(address(this), amount);

    } 
    
}