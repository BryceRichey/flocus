import EditListForm from "@/components/lists/edit-list-form";

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

    return (
        <EditListForm boardId={boardId} listData={listData} />
    );
}