const FgBlue = '\x1b[34m';
const Reset = '\x1b[0m';

const account = {
    name: 'Servidor de Nadie',
    expenses: [],
    income: [],
    addExpense: function(description, amount){
        const expense = {
            description: description,
            amount: amount
        }
        this.expenses.push(expense)
    },

    addIncome: function(description, amount){
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function(){
        let sumExpenses = 0 

        this.expenses.forEach(function(expense){
            sumExpenses += expense.amount
        })
        let sumIncome = 0
        this.income.forEach(function(income){
            sumIncome += income.amount
        })
        let balance = sumIncome - sumExpenses
        return `${account.name} has a balance of $${balance}. $${sumIncome} in income. $${sumExpenses} in expenses.`
    }
}

account.addExpense('Power bill', 500)
account.addExpense('Gas', 300)

account.addIncome('Current employment', 1400)
account.addIncome('Freelance', 600)

console.log(FgBlue, account.getAccountSummary())

console.log(Reset);
