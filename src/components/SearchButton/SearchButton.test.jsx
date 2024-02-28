import SearchButton from "./SearchButton.jsx";
import Search from "../Search/Search.jsx";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Search Button", () => {
  it("renders a search button", () => {
    render(<SearchButton />);
    const searchButton = screen.getByRole("button");
    expect(searchButton).toBeInTheDocument(Search);
  });
});
