'use server'

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client"

export async function createList(_prevState, formData) {
    const rawFormData = {
        listName: formData.get('listName'),
        boardId: formData.get('boardId'),
    }

    try {
        await prisma.lists.create({
            data: {
                listName: rawFormData.listName,
                boardsId: Number(rawFormData.boardId),
            }
        });

        revalidatePath(`/boards`);
    } catch (error) {
        console.log('Error Adding List');
    }
}