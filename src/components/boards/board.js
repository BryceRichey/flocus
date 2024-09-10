import List from "@/components/lists/list";
import NewListForm from "../lists/new-list-form";
import DeleteBoardForm from "./delete-board-form";
import ListOptionsButton from "../lists/list-options-button";
import BoardSettingsButton from "./board-settings-button";
import Buttons from "../buttons/button";

export default function Board({ board }) {
    if (board === null) {
        return (
            <p>Hmm.... No boards with that ID! </p>
        )
    }

    return (
        <main>
            <div className="flex justify-between bg-stone-200 px-8 py-4">
                <h1 className="text-xl">{board.boardName}</h1>
                <BoardSettingsButton />
            </div>
            <br />
            <div className="flex px-8 pt-4 overflow-x-auto">
                <ol className="flex">
                    {board.lists.map((list) => (
                        <li key={list.id} className="flex flex-col justify-between rounded bg-stone-400 mx-2 p-4">
                            <div className="flex justify-between">
                                <h2 className="mb-4 text-white">{list.listName}</h2>
                                <ListOptionsButton boardId={board.id} listId={list.id} />
                            </div>
                            <List boardId={board.id} listCards={list.cards} listId={list.id} />
                        </li>
                    ))}
                </ol>
                <div>
                    {/* <Buttons /> */}
                </div>
                <NewListForm boardId={board.id} />
                <DeleteBoardForm boardId={board.id} />
            </div>
        </main >
    );
}