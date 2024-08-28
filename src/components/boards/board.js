import List from "@/components/lists/list";

export default function Board({ board }) {
    return (
        <>
            <div>
                <h1>{board.boardName}</h1>
            </div>
            <br />
            <div className="flex">
                {board.lists.map((list) => (
                    <div key={list.id} className="rounded bg-stone-400 mx-2 p-4">
                        <h2 className="mb-4 text-white">{list.listName}</h2>
                        <List listCards={list.cards} />
                    </ div>
                ))}
            </div>
        </>
    );
}