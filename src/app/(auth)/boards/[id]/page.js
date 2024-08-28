import Board from "@/components/boards/board"

async function getBoardData(boardId) {
    try {
        const response = await fetch(`http://localhost:3000/api/boards/${boardId}`, { cache: 'no-store' });

        if (!response.ok) {
            throw new Error("Couldn't fetch boards, try again");
        }

        const board = await response.json();

        return <Board board={board} />;
    } catch (error) {
        console.error('Error fetching board:', error);

        return <p>Error loading board data</p>;
    }
}

export default async function BoardIdPage({ params }) {
    const boardId = params.id;

    let boardData = await getBoardData(boardId);

    return (
        <>
            {boardData}
        </>
    );
}