import Card from "../cards/card"

export default function List({ listCards }) {
    return (
        <div className="flex flex-col">
            {listCards.map((card) => (
                <>
                    <Card key={card.id} card={card} />
                </>
            ))}
        </div>
    );
}