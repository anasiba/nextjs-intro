'use client';

import { completeTodo } from '@/utils/actions';
import { useTransition } from 'react';

const Todo = ({ todo }) => {
    const [isPending, startTransition] = useTransition();
    return (
        <div
            className={`border border-blue-200 cursor-pointer ${todo.completed ? 'line-through bg-gray-400' : ''}`}
            onClick={() => startTransition(() => completeTodo(todo.id))}>
            <p>{todo.content}</p>
        </div >
    )
}

export default Todo