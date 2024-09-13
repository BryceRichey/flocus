import List from "@/components/lists/list";
import NewListForm from "../lists/new-list-form";
import DeleteBoardForm from "./delete-board-form";
import BoardSettingsButton from "./board-settings-button";

export default function Board({ board }) {
    if (board === null) {
        return (
            <p>Hmm.... No boards with that ID! </p>
        )
    }

    return (
        <main className="h-full flex flex-col">
            <div className="flex justify-between bg-stone-200 px-8 py-4">
                <h1 className="text-xl">{board.boardName}</h1>
                <BoardSettingsButton />
            </div>
            <br />
            <div className="flex flex-grow px-8 pt-4 overflow-x-auto">
                <ol className="flex">
                    {board.lists.map((list) => (
                        <List key={list.id} boardId={board.id} list={list}/>
                    ))}
                </ol>
                <NewListForm boardId={board.id} />
                <DeleteBoardForm boardId={board.id} />
            </div>
        </main >
    );
}