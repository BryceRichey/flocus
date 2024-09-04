export default function Card({ card }) {
    return (
        <>
            <li key={card.id} className="bg-stone-200 mb-2 p-1 rounded me-2 w-full">{card.cardName}</li>
        </>
    );
}