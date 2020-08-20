import React, { useContext } from 'react';
import {GlobalContext } from "./context/GlobalState"
import {transaction} from "./context/GlobalState"

type props = {
    transaction: transaction
}

 const Transaction = ({ transaction }:props) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = transaction.changeableAmount < 0 ? "-" : "+";

    return (
        <>
            <ul className="list">
                <li className={transaction.changeableAmount < 0 ? "minus" : "plus"} >
                    {transaction.textDesc} <span>{sign}${Math.abs(transaction.changeableAmount)}</span><button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">X</button>
                </li>
            </ul>
        </>
    )
}
export default Transaction