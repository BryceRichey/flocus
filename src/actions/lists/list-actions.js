'use server'

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client"
import { redirect } from "next/navigation";

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

    } catch (error) {
        console.log('Error Adding List');
    }

    revalidatePath(`/boards/${parseInt(rawFormData.boardId)}`);
}

export async function updateList(_prevState, formData) {
    const rawFormData = {
        boardId: formData.get('boardId'),
        listId: formData.get('listId'),
        listName: formData.get('listName'),
    }

    try {
        await prisma.lists.update({
            where: {
                id: Number(rawFormData.listId)
            },
            data: {
                listName: rawFormData.listName
            }
        });
    } catch (error) {
        console.log('Error Updating List');
    }


    revalidatePath(`/boards`);
    redirect(`/boards/${parseInt(rawFormData.boardId)}`)
}

export async function deleteList(_prevState, formData) {
    const rawFormData = {
        boardId: formData.get('boardId'),
        listId: formData.get('listId'),
    }

    try {
        await prisma.lists.delete({
            where: {
                id: Number(rawFormData.listId),
            }
        });

    } catch (error) {
        console.log('Error Deleting List');
    }

    revalidatePath(`/boards/${parseInt(rawFormData.boardId)}`);
}