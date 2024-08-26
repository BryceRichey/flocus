import { NextResponse } from 'next/server';
import prisma from '../../../../../prisma/client';

export async function POST(req) {
    const { boardName } = await req.json();

    if (!boardName) {
        return NextResponse.json({ error: 'Board name is required' }, { status: 400 });
    }

    const newBoard = await prisma.board.create({
        data: { boardName },
    });

    return NextResponse.json(newBoard);
}