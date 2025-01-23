import TodoList from "@/components/TodoList";
import prisma from "@/utils/db"

const getData = async () => {
    const todos = await prisma.todo.findMany();
    return todos
}

const TodosPage = async () => {
    const todos = await getData();

    return (
        <div>
            <TodoList todos={todos} />
        </div>

    )
}

export default TodosPage