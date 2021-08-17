import home_pic from "../home-pic.png";

function SingleCard(props) {
    return (
        <div className='cards__item'>
            <div className="home__pic">
                <img className="home__img" src={home_pic} alt="home_pic"/>
                <div className="home__label">
                    {props.type}
                </div>
            </div>
            <div className="home__info">
                <p className="home__title">
                    {props.title}
                </p>
                <p className="home__address">
                    {props.address}
                </p>
                <p className="home__price">
                    New Properties for Sale from <strong>£{props.price}</strong>
                </p>
                <p className="home__note">
                    Shared Ownership Available
                </p>
            </div>
        </div>
    )
}

export default SingleCard;