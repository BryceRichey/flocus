'use server'

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client"
import { redirect } from "next/navigation";

export async function createBoard(_prevState, formData) {
    const rawFormData = {
        boardName: formData.get('boardName'),
    }

    try {
        await prisma.boards.create({
            data: {
                boardName: rawFormData.boardName,
            }
        });

    } catch (error) {
        console.log('Error Adding Board');
    }

    revalidatePath('/boards');
}

export async function deleteBoard(_prevState, formData) {
    const rawFormData = {
        boardId: formData.get('boardId'),
    }

    console.log(rawFormData.boardId)

    try {
        await prisma.boards.delete({
            where: {
                id: Number(rawFormData.boardId),
            }
        });

    } catch (error) {
        console.log('Error Deleting Board');
    }

    revalidatePath('/boards');
    redirect('/boards');
}