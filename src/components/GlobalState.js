import React,{ createContext,useReducer } from "react"
import AppReducer from "./AppReducer";


const initialState = {
    transactions: [
        {id:1,description:"Income 1",transactionAmount:1000},
        {id:1,description:"Expense 1",transactionAmount:-100},
        {id:1,description:"Income 2",transactionAmount:500},
        {id:1,description:"Expense 2",transactionAmount:-200}

    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({childern}) =>{
    const [state,dispatch]  = useReducer(AppReducer, initialState);
    {console.log(`Inside Provider before return called ${childern}`)}
    return (
        <GlobalContext.Provider value={
            {transactions : state.transactions}
        }>
            {console.log(`Inside Provider called${childern}`)}
            {childern}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </GlobalContext.Provider>
    )
}