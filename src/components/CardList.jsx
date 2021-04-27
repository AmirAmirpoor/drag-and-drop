import { SortableContainer } from "react-sortable-hoc";
import Card from "./Card.jsx";

const CardList = SortableContainer(({ cards }) => {
  return (
    <div className="cardlist">
      {cards.map((card, index) => {
        // INDEX PROP IS IMPORTANT
        return <Card key={card.id} {...card} index={index} />;
      })}
    </div>
  );
});

export default CardList;
