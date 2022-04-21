import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, viewListSelector, add } from "./todolistSlice";

export default function Todo() {
  const dispatch = useDispatch();
  const viewList = useSelector(viewListSelector);
  const [goal, setGoal] = useState("New todo item");
  const [inputFields, setInputFields] = useState([
    {
      newTodo: "",
      notes: "",
    },
  ]);

  const handleFormChange = (index, event) => {
      let data = [...inputFields];
      data[index][event.target.name] = event.target.value;
  }

  return (
    <div>

    <form>
        {inputFields.map((input, idx) => {
            return (
                <div key={idx}>
                    <input
                    name='listName'
                    placeholder='Your new task'
                    value={input.listName}
                    onChange={event => handleFormChange(idx, event)}
                    />
                    <input
                    name='notes'
                    placeholder='Notes'
                    value={input.notes}
                    onChange={event => handleFormChange(idx, event)}
                    />
                </div>
            )
        })}
    </form>

      <div>
        {viewList.map((todo, idx) => {
          return (
            <div key={`listedTodo-${idx}`}>
              <p>{todo.listName}</p>
              <p>{todo.id}</p>
              <p>{todo.priority}</p>
              <p>{todo.status}</p>
              <p>{todo.createdAt}</p>
              <p>{todo.notes}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
