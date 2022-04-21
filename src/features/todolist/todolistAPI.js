export function fetchTodolist(input) {
    return new Promise ((resolve) => 
        setTimeout(() => resolve({ data: input}), 500)
    );
}