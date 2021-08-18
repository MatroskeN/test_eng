import SingleCard from "./SingleCard";

function Cards(props) {
    return (
        <div className="container">
            <div className="cards">
                {props.cards.slice(0, 6).map((card) => (
                    <SingleCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        address={card.address}
                        price={card.price}
                        type={card.type}
                    />
                ))}
            </div>
            <button className="more-btn">
                <p>See more</p>
                <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Chevron" d="M1 1L5.043 8.41667L1 15.8333" stroke="#363636" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    );
}

export default Cards;
