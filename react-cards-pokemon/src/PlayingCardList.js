import React from "react";
import { v1 as uuid } from "uuid";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import { useAxios } from "./hooks"; // Import the custom hook

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function PlayingCardList() {
  const [cards, addCard] = useAxios("https://deckofcardsapi.com/api/deck/new/draw/"); // Use the custom hook

  const handleAddCard = () => {
    addCard(); // Trigger the API call via the hook
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={handleAddCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map(cardData => (
          <PlayingCard key={uuid()} front={cardData.cards[0].image} /> // Display the card image
        ))}
      </div>
    </div>
  );
}

export default PlayingCardList;
