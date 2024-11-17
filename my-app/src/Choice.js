import { useState, useRef } from "react";

function Choice() {
  const [leftButtonText, setLeftButtonText] = useState("Left");
  const [rightButtonText, setRightButtonText] = useState("Right");
  const [sortedCards, setSortedCards] = useState([]);
  const [isSorting, setIsSorting] = useState(false);

  const tarotCards = [
    "The Fool",
    "The Magician",
    "The High Priestess",
    "The Empress",
    "The Emperor",
    "The Hierophant",
    "The Lovers",
    "The Chariot",
    "Strength",
    "The Hermit",
    "Wheel of Fortune",
    "Justice",
    "The Hanged Man",
    "Death",
    "Temperance",
    "The Devil",
    "The Tower",
    "The Star",
    "The Moon",
    "The Sun",
    "Judgement",
    "The World",
  ];

  const cards = useRef([...tarotCards]); // Keeps track of the cards being sorted
  const resolveComparison = useRef(null); // A promise resolver for user comparison

  // Function to shuffle the cards
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Bubble sort function
  const bubbleSort = async () => {
    setIsSorting(true);

    // Randomize cards before sorting
    cards.current = shuffle([...tarotCards]);
    setSortedCards([...cards.current]); // Display initial randomized list

    const n = cards.current.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        const comparison = await compare(cards.current[j], cards.current[j + 1]);
        if (comparison > 0) {
          // Swap if necessary
          [cards.current[j], cards.current[j + 1]] = [
            cards.current[j + 1],
            cards.current[j],
          ];
          setSortedCards([...cards.current]); // Update rankings after every swap
        }
      }
    }
    setIsSorting(false);
  };

  // Custom comparison function
  const compare = (left, right) => {
    setLeftButtonText(left);
    setRightButtonText(right);
    return new Promise((resolve) => {
      resolveComparison.current = resolve;
    });
  };

  // Handle button clicks
  const handleClick = (event) => {
    if (!isSorting || !resolveComparison.current) return;
    const clickedButton = event.target.id;
    resolveComparison.current(clickedButton === "left" ? 1 : -1); // Resolve based on the button clicked
  };

  return (
    <>
      <p>Kuub</p>
      <span>
        <button id="left" onClick={handleClick}>
          {leftButtonText}
        </button>
        <button id="right" onClick={handleClick}>
          {rightButtonText}
        </button>
      </span>
      <div>
        <button onClick={bubbleSort} disabled={isSorting}>
          Start Sorting
        </button>
      </div>
      <h2>Current Rankings:</h2>
      <ul>
        {sortedCards.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>
    </>
  );
}

export default Choice;
