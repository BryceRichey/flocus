import Link from "next/link";

async function getAllBoards() {
    try {
        const response = await fetch('http://localhost:3000/api/boards/', {
            cache: 'no-cache'
        });

        if (!response.ok) {
            throw new Error("Couldn't fetch boards, try again");
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching board:', error);

        return <p>Error loading all board</p>;
    }
}

export default async function BoardsPage() {
    const boardsData = await getAllBoards();
    console.log(boardsData);

    return (
        <main className="px-8 pt-4">
            <div>
                <h1 className="text-xl">Board Page</h1>
                <ul>
                    {boardsData.map((board) => (
                        <li key={board.id}>
                            <Link href={`/boards/${board.id}`}>
                                {board.boardName}
                            </Link>
                        </li>

                    ))}
                </ul>
            </div>

        </main>
    )
}