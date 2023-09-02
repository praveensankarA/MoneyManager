// Write your code here
import './index.css'

const TransactionItemList = props => {
  const {val} = props
  return (
    <li className="history-list-items">
      <p>{val.title}</p>
      <p>{val.amount}</p>
      <p>{val.type}</p>
      <button type="button" className="del-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-logo"
        />
      </button>
    </li>
  )
}

export default TransactionItemList
