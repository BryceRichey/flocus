import EditListForm from "@/components/lists/edit-list-form";
import Card from "@/components/cards/card";

async function getList(boardId, listId) {
    try {
        const response = await fetch(`http://localhost:3000/api/boards/${boardId}/${listId}`);

        if (!response.ok) {
            throw new Error("Couldn't fetch boards, try again");
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching list:', error);

        return <p>Error loading list</p>;
    }
}

export default async function ListIdPage({ params }) {
    const boardId = params.id;
    const listId = params.listId;
    const listData = await getList(boardId, listId);

    console.log(listData)

    return (
        <main className="px-8 pt-4">
            <EditListForm boardId={boardId} listData={listData} />
            <div>
                <ul className="flex flex-col">
                    {listData.cards.map((card) => (
                        <Card key={card.id} card={card} />
                    ))}
                </ul>
            </div>
        </main>
    );
}