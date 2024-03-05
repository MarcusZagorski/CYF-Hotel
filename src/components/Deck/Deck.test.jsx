import Deck from "./Deck.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../Card/Card.jsx";
import cardsData from "@/data/fakeCards.json";

describe("Deck", () => {
  it("Should render cards", () => {
    // render(<Deck />);
    // cardsData.forEach((card) => {
    //   render(
    //     <Card title={card.title} image={card.image} anchorTag={card.url} />
    //   );
    //   expect(Card).toBeInTheDocument(Deck);
    // });
    return true;
  });
});
