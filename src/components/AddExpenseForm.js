import React, { useContext, useState } from "react";
import {AppContext} from "../context/AppContext";
import {v4 as uuidv4} from 'uuid';
function AddExpenseForm() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const {dispatch} = useContext(AppContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const expense = {
        id : uuidv4(),
        name,
        cost : parseInt(cost)
    };
    dispatch({
        type : 'ADD_EXPENSE',
        payload : expense
    })
    setName('');
		setCost('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input 
          required 
          type="text" 
          className="form-control" 
          id="cost"
          value={cost}
          onChange={(e)=>setCost(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddExpenseForm;
