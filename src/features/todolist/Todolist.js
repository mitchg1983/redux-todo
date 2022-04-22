import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { update, viewListSelector, add } from "./todolistSlice";
import ShowUserTodos from "../../components/ShowUserTodos"

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
    setInputFields(data);
  };

  const addNewTask = () => {
    let newTask = {
      listName: "",
      notes: "",
    };
    setInputFields([...inputFields, newTask]);
  };

  const submitNewTask = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <div>
      <form onSubmit={submitNewTask}>
        {inputFields.map((input, idx) => {
          return (
            <div key={idx}>
              <input
                name="listName"
                placeholder="Your new task"
                value={input.listName}
                onChange={(event) => handleFormChange(idx, event)}
              />
              <input
                name="notes"
                placeholder="Notes"
                value={input.notes}
                onChange={(event) => handleFormChange(idx, event)}
              />
              <button>...update this task</button>
              <button> Complete Task </button>
            </div>
          );
        })}
        <button onClick={addNewTask}>Add new task...</button>

        <button onClick={submitNewTask}>Submit</button>
      </form>
        <ShowUserTodos list={viewList} />
      {/* <div>
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
      </div> */}
    </div>
  );
}
