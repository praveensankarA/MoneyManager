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
    titleInp: '',
    amountInp: '',
    amountType: transactionTypeOptions[0].optionId,
    amountList: [],
  }

  addFunction = event => {
    event.preventDefault()
    const {titleInp, amountInp, amountType, amountList} = this.state

    if (titleInp !== '' && amountInp !== '') {
      const newList = {
        id: uuidv4(),
        title: titleInp,
        amount: parseInt(amountInp),
        type: amountType,
      }

      this.setState({
        amountList: [...amountList, newList],
        amountInp: '',
        titleInp: '',
        amountType: transactionTypeOptions[0].optionId,
      })
    }
  }

  getBalnce = () => {
    const {amountList} = this.state
    let balance = 0
    amountList.forEach(each => {
      if (each.type === 'INCOME') {
        balance += each.amount
      } else if (each.type === 'EXPENSES') {
        balance -= each.amount
      }
    })
    return balance
  }

  getIncome = () => {
    const {amountList} = this.state
    let income = 0
    amountList.forEach(each => {
      if (each.type === 'INCOME') {
        income += each.amount
      }
    })
    return income
  }

  getExpense = () => {
    const {amountList} = this.state
    let Expense = 0
    amountList.forEach(each => {
      if (each.type === 'EXPENSES') {
        Expense += each.amount
      }
    })
    return Expense
  }

  titleEleOnChangeFunction = event => {
    this.setState({titleInp: event.target.value})
  }

  amountEleOnChangeFunction = event => {
    this.setState({amountInp: event.target.value})
  }

  typeEleOnChangeFunction = event => {
    this.setState({amountType: event.target.value})
  }

  deleteList = id => {
    const {title, amount, amountType, amountList} = this.state
    const a = amountList.filter(each => each.id !== id)
    this.setState({amountList: a})
  }

  render() {
    const {titleInp, amountInp, amountType, amountList} = this.state
    const currentBalance = this.getBalnce()
    const currentIncome = this.getIncome()
    const currentExpense = this.getExpense()

    return (
      <div className="main-container">
        <div className="name-container">
          <h1 className="main-title">Hi Richard</h1>
          <p>
            Welcome to your
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
            <h1 className="money-add-title">Add Transaction</h1>

            <label htmlFor="name">Title</label>
            <br />
            <input
              value={titleInp}
              id="name"
              onChange={this.titleEleOnChangeFunction}
              placeholder="Title"
              className="title-input"
            />
            <br />
            <br />
            <label htmlFor="name">Amount</label>
            <br />
            <input
              value={amountInp}
              id="name"
              type="number"
              onChange={this.amountEleOnChangeFunction}
              placeholder="Amount"
              className="title-input"
            />
            <br />
            <br />
            <label htmlFor="type">Type</label>
            <br />
            <select
              value={amountType}
              id="type"
              onChange={this.typeEleOnChangeFunction}
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
                <TransactionItemList
                  val={each}
                  delFun={this.deleteList}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
