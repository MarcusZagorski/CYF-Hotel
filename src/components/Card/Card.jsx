import "./Card.scss";

const Card = ({ title, anchorTag, image }) => {
  return (
    <>
      <a href={anchorTag} className="card">
        <p className="card__title">{title}</p>
        <img src={image} className="card__image" alt={title} />
      </a>
    </>
  );
};

export default Card;
