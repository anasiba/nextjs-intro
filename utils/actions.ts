'use server';

import { revalidatePath } from "next/cache";
import prisma from "./db";

export const newTodo = async (formData) => {
    const todo = await prisma.todo.create({
        data: {
            content: formData.get('content'),
        }
    });

    revalidatePath('/todos');
}

export const completeTodo = async (id) => {
    await prisma.todo.update({
        where: {
            id: id
        },
        data: {
            completed: true
        }
    })

    revalidatePath('/todos');
}