import { SortableElement } from "react-sortable-hoc";

const Card = SortableElement(({ title }) => {
  return <div className="card">{title}</div>;
});

export default Card;
