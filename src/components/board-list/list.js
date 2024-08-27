import ListButton from "./list-button"
import ListItems from "./list-items"

export default function List() {
    return (
        <div className="flex rounded bg-stone-400 mx-2">
            <li className="list-none m-4">
                <div>
                    <p className="mb-3 text-white">LIST TITLE</p>
                    <ListItems />
                    <ListButton />
                </div>
            </li>
        </div>
    )
}