import Todo from "./Todo"

const TodoList = ({ todos }) => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map(todo => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </ul>
        </div>
    )
}

export default TodoList