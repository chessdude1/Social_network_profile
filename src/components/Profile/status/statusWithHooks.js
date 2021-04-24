import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const StatusWithHooks = (props) => {
 

  let StateWithSetState = useState(false);
  let [editMode, setEditMode] = StateWithSetState;

  let [status, statusChange] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  };

  const onStatusChange = (e) => {
    statusChange(e.currentTarget.value);
  };

  const useEffect = (()=> {
    statusChange(props.status)
}, [props.status])

  return (
    <div>
      <div>
        {!editMode && (
          <span onDoubleClick={activateEditMode}>
            {props.status || "No status"}
          </span>
        )}
      </div>
      <div>
        {editMode && (
          <input
            onChange={onStatusChange}
            onBlur={deActivateEditMode}
            value={status}
          ></input>
        )}
      </div>
    </div>
  );
};

export default StatusWithHooks;
