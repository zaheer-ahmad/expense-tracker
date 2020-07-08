import React,{useState} from 'react'

export const AddTransaction = () => {
    const [description,setDescription] = useState();
    const [transactionAmount,setTransactionAmount] = useState();
    return (
        <div>
            <form>
                <div class="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" 
                    placeholder="Enter Description" value={description}
                    onChange={(e) =>{setDescription(e.target.value)}}
                    />
                </div>
                <div class="form-group">
                    <label htmlFor="transactionAmount">Transaction Amount</label>
                    <input type="number" id="transactionAmount"
                     name="transactionAmount"
                      placeholder="Enter Amount" value={transactionAmount}
                      onChange={(e) => {setTransactionAmount(e.target.value)}}
                      />
                </div>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}
