
export default function Card({ card, index }){
    return (
        <div className="card">
            <img src={card.image} alt={card.name} />
        </div>
    )
}