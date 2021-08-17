import SingleCard from "./SingleCard";
import {useEffect, useState} from "react";


function Cards() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('https://603e38c548171b0017b2ecf7.mockapi.io/homes')
            .then(response => response.json())
            .then(result => setCards(result))
    },[]);
    return (
        <div className='cards'>
            {cards.slice(0,6).map(card => (
                <SingleCard title={card.title} address={card.address} price={card.price} type={card.type}/>
            ))}

        </div>
    )
}

export default Cards;