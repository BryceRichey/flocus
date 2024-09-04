'use server'

import { revalidatePath } from "next/cache";
import prisma from "../../../prisma/client"

export async function createCard(_prevState, formData) {
    const rawFormData = {
        cardName: formData.get('cardName'),
        listId: formData.get('listId'),
        boardId: formData.get('boardId'),
    }

    try {
        await prisma.cards.create({
            data: {
                cardName: rawFormData.cardName,
                listsId: Number(rawFormData.listId),
            }
        });

    } catch (error) {
        console.log('Error Adding Card');
    }

    revalidatePath(`/boards/${parseInt(rawFormData.boardId)}`);
}

export async function deleteCard(_prevState, formData) {
    const rawFormData = {
        boardId: formData.get('boardId'),
        cardId: formData.get('cardId'),
    }

    try {
        await prisma.cards.delete({
            where: {
                id: Number(rawFormData.cardId),
            }
        });

    } catch (error) {
        console.log('Error Deleting Card');
    }

    revalidatePath(`/boards/${parseInt(rawFormData.boardId)}`);
}