const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
    const board = await prisma.boards.create({
        data: {
            boardName: 'Test-Board-1'
        }
    });

    const list = await prisma.lists.create({
        data: {
            listName: 'List-Name-1',
            board: {
                connect: { id: board.id },
            },
        }
    });

    await prisma.cards.create({
        data: {
            cardName: 'Card-Name-1',
            list: {
                connect: { id: list.id },
            }
        }
    });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });