import {transaction} from "./GlobalState"

export default (state:any, action: any) => {
    switch (action.type) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter((transact:transaction) => transact.id !== action.payload),
                edited: false,
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions],
                added: true,
                edited: false,
            }
        default:
            return state;
    }
}