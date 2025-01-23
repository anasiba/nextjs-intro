import prisma from "@/utils/db"
import { NextResponse } from "next/server"


export const GET = async (req: Request, res: Response) => {
    const todos = await prisma.todo.findMany()
    return NextResponse.json({ data: todos })
}


export const POST = async (req: Request, res: Response) => {
    const data = await req.json();
    const todo = await prisma.todo.create({ data })

    return NextResponse.json({ todo })
}