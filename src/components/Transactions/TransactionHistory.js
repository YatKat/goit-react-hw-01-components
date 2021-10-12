import React from "react";
import PropTypes from "prop-types";
import styles from "../Transactions/transactionStyle.module.css";



class TransactionHistory extends React.Component{

    render(){

        return(
            <table className={styles.transactionHistory}>
    <thead className={styles.transactionHead}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {this.props.transactions.map(({ id, type, amount, currency }) => (
         <tr key={id} className={styles.tableTr}>
         <td>{type}</td>
         <td>{amount}</td>
         <td>{currency}</td>
       </tr>
      ))}
    </tbody>
  </table>
        )
    }

}

TransactionHistory.propTypes = {
    transactions : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount:PropTypes.string,
            currency: PropTypes.string
})
    ).isRequired
};

export default TransactionHistory;