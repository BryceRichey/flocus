import prisma from "../../../../../prisma/client";

export async function GET(_req) {
    try {
        const boards = await prisma.boards.findMany()

        return new Response(JSON.stringify(boards), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error('Error fetching boards:', error);

        return new Response(JSON.stringify({ error: 'Failed to fetch boards' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}