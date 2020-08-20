import React, { useContext } from 'react'
import { GlobalContext } from "./context/GlobalState"
import {transaction} from "./context/GlobalState"

 const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const changeableAmounts = transactions.map((transact:transaction) => transact.changeableAmount);

    const totalIncome = changeableAmounts
        .filter((item:number) => item > 0)
        .reduce((acc:number, item:number) => (acc += item), 0)
        .toFixed(2);

    const totalExpense = (
        changeableAmounts.filter((item:number) => item < 0).reduce((acc:number, item:number) => (acc += item), 0) *
        -1
    ).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${totalIncome}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">-${totalExpense}</p>
            </div>
        </div>
    )
}
export default IncomeExpenses