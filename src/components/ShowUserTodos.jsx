export default function ShowUserTodos({ list }) {
  console.log("these are the props", list);
  return (
    <div>
      These will be the TODOs
      {list.map((todo, idx) => {
        const keys = Object.keys(todo);
        console.log("Your todo is...", todo);
        console.log("Your keys are...", keys);

        return (
          <div key={`showTodo-${idx}`}>
            New todo to show
            <div>
              {" "}
              {keys.map((key, idx) => {
                return <p key={`key-${idx}`}>{key} : {todo[key]}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
