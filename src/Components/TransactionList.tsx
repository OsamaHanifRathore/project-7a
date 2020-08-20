import React, { useContext } from 'react';
import { GlobalContext } from "./context/GlobalState"
import Transaction from "./Transaction"
import {transaction} from "./context/GlobalState"

 const TransactionList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transact:transaction) => {
                    return <Transaction key={transact.id} transaction={transact} />
                })}
            </ul>
        </>
    )
}
export default TransactionList