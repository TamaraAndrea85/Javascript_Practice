// 1. Deposit some money
// 2. Determin number of lines to bet on th
// 3. collect a bet amount
// 4. Spin slot machine
// 5. check if user won
// 6. Give user winings
// 7. Play again

prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOL_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};

const SYMBOL_VALUE = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

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

const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the  bet per line: ");
    const betNumber = parseFloat(bet);

    if (isNaN(betNumber) || betNumber <= 0 || betNumber > balance / lines) {
      console.log("invalid bet, try again");
    } else {
      return betNumber;
    }
  }
};

const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
      console.log(symbols);
    }
  }
};
spin();
let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
