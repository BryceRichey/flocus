import Link from "next/link";
import ArrowRightIcon from "../icons/arrow-right";
import { list } from "postcss";

export default function Card({ boardId, listId, card }) {
    return (
        <>
            <li key={card.id} className="group bg-white/85 mb-2 p-2 rounded-lg me-2 w-full">
                <Link href={`/boards/${boardId}/${listId}/${card.id}`} className="flex justify-between">
                    {card.cardName}
                    <span className="flex self-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRightIcon />
                    </span>
                </Link>
            </li>
        </>
    );
}