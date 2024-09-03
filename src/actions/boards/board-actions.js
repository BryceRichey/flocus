'use server'

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client"

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