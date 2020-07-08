import React from 'react'

export const Transaction = ({transaction}) => {
    return (
        
            <li className="minus">
                {transaction.description} <span>{transaction.transactionAmout}</span>
                <button onClick={alert('clicked')}>X</button>
            </li>
    )
}
