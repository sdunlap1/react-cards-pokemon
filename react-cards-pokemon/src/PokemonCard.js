import React from "react";
import "./PokemonCard.css";
import { useFlip } from "./hooks"; // Import the hook

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {
  const [isFlipped, toggleFlip] = useFlip(); // Use the hook

  return (
    <div onClick={toggleFlip} className="PokemonCard Card">
      {isFlipped ? (
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard;
