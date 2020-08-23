import React, { useState, useContext } from 'react';
import { GlobalContext } from "./context/GlobalState"
import axios from 'axios';
import firebase from '../firebase';

const AddTransaction = () => {
    const [textDesc, setText] = useState('');
    const [changeableAmount, setAmount] = useState(0);
    const { addTrans } = useContext(GlobalContext);

    async function sendNotification() {
        const messaging = firebase.messaging();
        messaging.requestPermission()
        const token = await messaging.getToken();
        const response = await axios.post(
            'https://fcm.googleapis.com/fcm/send',
            {
                notification: {
                    title: "Expense Tracker by Dawood",
                    body: "You Are Out Of Budget.",
                    click_action: "",
                    icon: 'https://github.com/dawood6/project-7a/blob/master/public/logo192x192.png?raw=true',
                },
                "to": token
            },
            { headers: { 'Content-Type': 'application/json', 'Authorization': 'key=AAAAI7_UDso:APA91bEp661TgU4IB5ph6F2e7zA-YD2zr28df9ZGjikqmB3lesWQI4GImcaLfAeJxm2lVqFM0aHB-HrQAuvFpurDOBa9fp59dIbPsGWe2yaSaxsA_BWfKqoO7rhTyCp3kEAWdqEehc0f' } }
        );
        console.log('Response: ', response);
    }

    const AddIncome = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const newTrans = {
            id: Math.floor(Math.random() * 100000000),
            textDesc: textDesc,
            changeableAmount: +changeableAmount,
        }
        addTrans(newTrans);
    };
    const AddExpense = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const newTrans = {
            id: Math.floor(Math.random() * 100000000),
            textDesc: textDesc,
            changeableAmount: -changeableAmount,
        }
        addTrans(newTrans);

    };
    if (changeableAmount < 3000 && changeableAmount > 0) {
        sendNotification()
    }
    return (
        <>
            <h3>Add new Transaction</h3>
            <form >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={textDesc} onChange={(e) => setText(e.target.value)} placeholder="Enter Text...." required />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount <br /> (negative = expense,positive = income)</label>
                    <input type="number" value={changeableAmount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(parseFloat(e.target.value))} placeholder="Enter Amount..." required />
                </div>
                <button onClick={AddIncome} className="btn">Add Income</button>
                <button onClick={AddExpense} className="btn">Add Expense</button>
            </form>
        </>
    )
}

export default AddTransaction