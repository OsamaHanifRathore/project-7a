import React from 'react';
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomeExpenses from "./Components/IncomeExpense";
import TransactionList from "./Components/TransactionList";
import AddTransaction from "./Components/AddTransaction";
import { GlobalProvider } from "./Components/context/GlobalState";
import './App.css';
// import firebase from './firebase'

function App() {
    // useEffect(() => {
    //     const messaging = firebase.messaging()
    //     messaging.requestPermission()
    //         .then(() => {
    //             console.log("have permision");
    //             return messaging.getToken()
    //         })
    //         .then((token) => {
    //             console.log('token', token)
    //         })
    //         .catch(() => {
    //             console.log("not");
    //         })
    // }, [])
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
