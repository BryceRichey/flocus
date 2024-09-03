import prisma from "../../../../../../../prisma/client";

export async function GET(_req, { params }) {
    const listId = params.listId;

    try {
        const list = await prisma.lists.findUnique({
            where: {
                id: Number(listId)
            },
            include: {
                cards: true,
            }
        });


        return new Response(JSON.stringify(list), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })

    } catch (error) {
        console.error('Error fetching list:', error);

        return new Response(JSON.stringify({ error: 'Failed to fetch list' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}