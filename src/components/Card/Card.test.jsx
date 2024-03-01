import Card from "./Card.jsx";
import cardsData from "@/data/fakeCards.json";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Card", () => {
  it("Testing the card renders", () => {
    cardsData.forEach((card) => {
      render(
        <Card title={card.title} image={card.image} anchorTag={card.url} />
      );
      const title = screen.getByText(card.title);
      expect(title).toBeInTheDocument(Card);
      const image = screen.getByAltText(card.title);
      expect(image).toBeInTheDocument(Card);
      const anchors = screen.getAllByRole("link");
      anchors.forEach((anchor) => {
        expect(anchor).toBeInTheDocument(Card);
      });
    });
  });
});
