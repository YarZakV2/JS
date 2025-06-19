const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],
  nextId: 1,

  createTransaction(amount, type) {
    return { id: this.nextId++, type, amount };
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(transaction);
  },

  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Недостатньо коштів');
      return;
    }
    this.balance -= amount;
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(transaction);
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    return this.transactions.find(({ id: tId }) => tId === id);
  },

  getTransactionTotal(type) {
    return this.transactions
      .filter(({ type: tType }) => tType === type)
      .reduce((total, { amount }) => total + amount, 0);
  },
};
