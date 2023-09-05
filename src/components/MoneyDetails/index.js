// Write your code here

import './index.css'

const moneyDetails = props => {
  const {incomeAmount, expenseAmount, balanceAmount} = props
  return (
    <div className="money-detail-container ">
      <div className="monet-type-logo-card balance">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="money-logo"
        />
        <div className="money-type-name-container">
          <p className="money-type-name-ele">Your Balance</p>
          <p className="money-type-amount-ele">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className="monet-type-logo-card income">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png "
          alt="income"
          className="money-logo"
        />
        <div className="money-type-name-container">
          <p className="money-type-name-ele">Your Income</p>
          <p className="money-type-amount-ele">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className="monet-type-logo-card expense">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="money-logo"
        />
        <div className="money-type-name-container">
          <p className="money-type-name-ele">Your Expenses</p>
          <p className="money-type-amount-ele">Rs {expenseAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default moneyDetails
