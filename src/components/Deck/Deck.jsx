import Card from "@/components/Card/Card";
import "./Deck.scss";
import cardsData from "@/data/fakeCards.json";

const Deck = () => {
  return (
    <>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          anchorTag={card.url}
          image={card.image}
        />
      ))}
    </>
  );
};

export default Deck;
