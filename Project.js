// 1. Deposit some money
// 2. Determin number of lines to bet on th
// 3. collect a bet amount
// 4. Spin slot machine
// 5. check if user won
// 6. Give user winings
// 7. Play again

prompt = require("prompt-sync")();
const deposit = () => {
  while (true) {
    const depositAmcount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmcount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("invalid deposit amount, try again");
    } else {
      return numberDepositAmount;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("invalid number of lines, try again");
    } else {
      return numberOfLines;
    }
  }
};

const getBet = (balance) => {
  while (true) {
    const bet = prompt("Enter the total bet: ");
    const betNumber = parseFloat(bet);

    if (isNaN(betNumber) || betNumber <= 0 || betNumber > balance) {
      console.log("invalid bet number, try again");
    } else {
      return betNumber;
    }
  }
};

let blance = deposit();
const numberOfLines = getNumberOfLines();
const betNumber = bet();
