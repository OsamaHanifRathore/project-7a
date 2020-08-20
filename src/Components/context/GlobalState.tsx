import React, { createContext, useReducer, ReactNode } from 'react';
import ExpenseReducer from "./AppReducer"

const initialTransactions = {
    transactions: [],
    added: false,
    id: "",
    deleteTransaction: (id:any) => (id),
    addTrans: (transaction:any) => (transaction)
}

export type transaction = {
    textDesc: string,
    id: number,
    changeableAmount: number,
}

type props = {
    children: ReactNode,
}

export type state = {
    transactions: transaction[],
    added: boolean,
    id: string,
    deleteTransaction: (id:number) => void,
    addTrans: (transaction:transaction) => void,
}

export const GlobalContext = createContext(initialTransactions);

export const GlobalProvider = ({ children }:props) => {
    const [state, dispatch] = useReducer(ExpenseReducer, initialTransactions)
    function deleteTransaction(id:number) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id,
        })
    }

    function addTrans(transaction:transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction,
        })
    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTrans,
            added: state.added,
            id: state.id,
        }
        } >
            {children}
        </GlobalContext.Provider>
    )
}
