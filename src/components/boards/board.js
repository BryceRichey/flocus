import List from "@/components/lists/list";
import NewListForm from "./new-list-form";

export default function Board({ board }) {
    if (board === null) {
        return (
            <p>Hmm.... No boards with that ID! </p>
        )
    }

    return (
        <main className="px-8 pt-4">
            <div>
                <h1 className="text-xl">{board.boardName}</h1>
            </div>
            <br />
            <div className="flex">
                <ol className="flex">
                    {board.lists.map((list) => (
                        <li key={list.id} className="rounded bg-stone-400 mx-2 p-4">
                            <h2 className="mb-4 text-white">{list.listName}</h2>
                            <List listCards={list.cards} listId={list.id} />
                        </li>
                    ))}
                </ol>
                <NewListForm boardId={board.id} />
            </div>
        </main >
    );
}