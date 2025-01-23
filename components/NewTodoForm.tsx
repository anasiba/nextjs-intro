import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
    return (
        <div>
            <form action={newTodo}>
                <input type="text" name="content" className="border bordeer-2 " />
                <button type="submit" className="border border-2">Submit</button>
            </form>
        </div>
    );

}

export default NewTodoForm;