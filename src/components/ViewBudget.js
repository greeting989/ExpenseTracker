import React from "react";

function ViewBudget(props) {
  return (
    <div>
      <span>Rs {props.budget}</span>
      {" "}
      {" "}
      <button
        type="button"
        class="btn btn-sm btn-primary"
        onClick={props.handleEditClick}
      >
        Edit
      </button>
    </div>
  );
}

export default ViewBudget;
