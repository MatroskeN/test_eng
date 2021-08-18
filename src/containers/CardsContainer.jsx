import { useEffect, useState } from "react";
import Cards from "../components/Cards";

function CardsContainer(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("https://603e38c548171b0017b2ecf7.mockapi.io/homes")
      .then((response) => response.json())
      .then((result) => setCards(result));
  }, []);

  return (
    <Cards
      cards={cards.filter((card) => card.title.toLowerCase().includes(props.filteredWord))}
    />
  );
}
export default CardsContainer;
