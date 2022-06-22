import "./Cards.css";

function Cards(props) {
  return (
    <div className="cardPk">
      <span className="names">{props.name}</span>
      <img src={props.img}></img>
      <div className="cardInternoPk">
        <span>Type: {props.type}</span>
        <span>Peso Médio: {props.pesoMedio}</span>
      </div>
    </div>
  );
}

export default Cards;
