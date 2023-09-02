import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItemList from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    amountType: transactionTypeOptions[0].optionId,
    amountList: [
      {
        id: uuidv4(),
        title: 'income',
        amount: 5000,
        type: 'Income',
      },
      {
        id: uuidv4(),
        title: 'income',
        amount: 5000,
        type: 'Income',
      },
      {
        id: uuidv4(),
        title: 'income',
        amount: 5000,
        type: 'Income',
      },
    ],
  }

  addFunction = event => {
    event.preventDefault()
    console.log('add Fun')
  }

  typeBtnOnchange = event => {
    console.log(event.target.value)
  }

  getBalnce = () => {
    const {amountList} = this.state
    const balance = 0
    amountList.map(each => (balance += each.amount))
    return balance
  }

  render() {
    const {title, amount, amountType, amountList} = this.state
    const currentBalance = this.getBalnce
    const currentIncome = 0
    const currentExpense = 0

    return (
      <div className="main-container">
        <div className="name-container">
          <h1 className="main-title">Hi Richard</h1>
          <p>
            Welcome to your{' '}
            <span className="main-title-subheading">Money Manager</span>
          </p>
        </div>
        <MoneyDetails
          key={uuidv4()}
          incomeAmount={currentIncome}
          expenseAmount={currentExpense}
          balanceAmount={currentBalance}
        />
        <div className="form-history-container">
          <form className="form-container" onSubmit={this.addFunction}>
            <h1 className="money-add-title">Add Money</h1>

            <label htmlFor="name">Title</label>
            <br />
            <input id="name" placeholder="Title" className="title-input" />
            <br />
            <br />
            <label htmlFor="name">Amount</label>
            <br />
            <input
              id="name"
              type="number"
              placeholder="Amount"
              className="title-input"
            />
            <br />
            <br />
            <label htmlFor="type">Type</label>
            <br />
            <select
              id="type"
              onChange={this.typeBtnOnchange}
              className="title-input select-btn"
            >
              {transactionTypeOptions.map(each => (
                <option value={each.optionId}>{each.displayText}</option>
              ))}
            </select>
            <br />
            <br />
            <button className="add-btn" type="submit">
              Add
            </button>
          </form>
          <div className="history-container">
            <h1>History</h1>
            <ul className="history-item-main-container">
              <li className="list-ele-head-list">
                <div className="list-ele-head-list-Items">
                  <p>Title</p>
                  <p>Amount</p>
                  <p>Type</p>
                </div>
              </li>

              {amountList.map(each => (
                <TransactionItemList val={each} key={each.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
