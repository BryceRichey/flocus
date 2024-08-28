import prisma from "../../../../../../prisma/client";

export async function GET(_req, { params }) {
    const boardId = params.id;

    try {
        const board = await prisma.boards.findUnique({
            where: {
                id: Number(boardId)
            },
            include: {
                lists: {
                    include: {
                        cards: true,
                    }
                }
            }
        });

        return new Response(JSON.stringify(board), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching board:', error);

        return new Response(JSON.stringify({ error: 'Failed to fetch board' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

// import { NextResponse } from 'next/server';
// import prisma from '../../../../../prisma/client';

// export async function POST(req) {
//     const { boardName } = await req.json();

//     if (!boardName) {
//         return NextResponse.json({ error: 'Board name is required' }, { status: 400 });
//     }

//     const newBoard = await prisma.board.create({
//         data: { boardName },
//     });

//     return NextResponse.json(newBoard);
// }