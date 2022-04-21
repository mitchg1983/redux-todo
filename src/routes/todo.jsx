import Todolist from "../features/todolist/Todolist"

export default function Todo() {
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Your TODO list</h2>
        <div>
          <Todolist />
        </div>
      </main>
    );
  }