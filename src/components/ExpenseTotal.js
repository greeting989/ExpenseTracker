import React, { useContext } from 'react';
import {AppContext} from "../context/AppContext";

function ExpenseTotal() {
    const {expenses} = useContext(AppContext);
    const totalExpense = expenses.reduce((total,item)=>{
        return (total+=item.cost)
    },0);
  return (
    <div className='alert alert-primary'>
        <span>Spend so far : Rs {totalExpense}</span>
    </div>
  )
}

export default ExpenseTotal;