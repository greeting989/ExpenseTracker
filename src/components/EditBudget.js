import React,{useState} from 'react';

function EditBudget(props) {
    const [value, setValue] = useState(props.budget)
  return (
    <div>
        <input 
            required
            type='number'
            className='form-control mr-3'
            id='name'
            value={value}
            onChange={(e)=>setValue(e.target.value)}
        /> 
        
        <button
            type='button'
            className='btn btn-primary'
            onClick={()=>props.handleSaveClick(value)}
        >
            Save
        </button>
    </div>
  )
}

export default EditBudget;