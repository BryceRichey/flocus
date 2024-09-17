export default function Card({ card }) {
    return (
        <>
            <li key={card.id} className="bg-white/85 mb-2 p-2 rounded-lg me-2 w-full">{card.cardName}</li>
        </>
    );
}