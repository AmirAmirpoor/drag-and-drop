import { useState } from "react";
import CardList from "./components/CardList";

import "./App.css";

const SAMPLE_CARDS_DATA = [
  { id: 1, title: "first" },
  { id: 2, title: "second" },
  { id: 3, title: "third" },
  { id: 4, title: "fourth" },
  { id: 5, title: "fifth" },
  { id: 6, title: "sixth" },
  { id: 7, title: "seventh" },
];

const App = () => {
  const [cards, setCards] = useState(SAMPLE_CARDS_DATA);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    document.body.style.cursor = "default";
    if (oldIndex === newIndex) return;

    const updatedCards = [...cards];
    const movedItem = updatedCards.splice(oldIndex, 1)[0];
    updatedCards.splice(newIndex, 0, movedItem);

    setCards(updatedCards);
  };

  const onSortStart = () => {
    document.body.style.cursor = "pointer";
  };

  return (
    <div className="App">
      <CardList
        cards={cards}
        axis="xy"
        onSortEnd={onSortEnd}
        onSortStart={onSortStart}
        transitionDuration={500}
      />
    </div>
  );
};

export default App;
