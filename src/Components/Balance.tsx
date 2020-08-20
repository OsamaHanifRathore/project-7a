import React, { useContext } from 'react';
import { GlobalContext } from "./context/GlobalState";
import {transaction} from "./context/GlobalState";

 const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const changeableAmounts = transactions.map((transact:transaction) => transact.changeableAmount);

    const totalChangeableAmount = changeableAmounts.reduce((acc:number, item:number) => (acc += item), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${totalChangeableAmount}</h1>
        </>
    )
}
export default Balance