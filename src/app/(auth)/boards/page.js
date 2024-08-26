import prisma from "../../../../prisma/client";

export default async function Boards() {
    const boards = await prisma.boards.findMany();

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {boards.map((board) => (
                    <li key={board.id}>{board.board_name}</li>
                ))}
            </ul>
        </div>
    );
}