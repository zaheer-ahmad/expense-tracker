import React,{useContext} from 'react'
import {GlobalContext} from './GlobalState'
import {Transaction} from './Transaction'

export const TransactionHistory = () => {

const {transactions} = useContext(GlobalContext)
    return (
        <div>
            <ul>
                {
                    transactions.map(transaction => (
                        <Transaction transaction={transaction}></Transaction>
                     ))
                }
               
            </ul>
        </div>
    )
}
