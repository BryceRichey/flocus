import Card from "../cards/card"
import Footer from "./footer";

export default function List({ listId, listCards }) {
    return (
        <>
            <ul className="flex flex-col">
                {listCards.map((card) => (
                    <Card key={card.id} card={card} />
                ))}
            </ul>
            <Footer listId={listId} />
        </>
    );
}