import home_pic from "../home-pic.png";
import {useEffect} from "react";

function SingleCard(card) {

    return (
        <div className={"cards__item"}>
            <div className="home__pic">
                <img className="home__img" src={home_pic} alt="home_pic"/>
                {card.type === "IndependentLiving" ? (
                    <div className="home__label">
                        Independent living
                    </div>
                ) : (
                    <div className="home__label orange">
                        Restaurant & Support available
                    </div>
                )}
            </div>
            <div className="home__info">
                <p className="home__title">
                    {card.title}
                </p>
                <p className="home__address">
                    {card.address}
                </p>
                <p className="home__price">
                    New Properties for Sale from <strong>£{card.price}</strong>
                </p>
                <p className="home__note">
                    Shared Ownership Available
                </p>
            </div>
        </div>
    )


}

export default SingleCard;