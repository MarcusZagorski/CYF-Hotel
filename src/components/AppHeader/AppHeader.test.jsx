import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import AppHeader from "./AppHeader.jsx";

describe("App Header", () => {
  it("renders a header/banner", () => {
    render(<AppHeader />);
    const appHeader = screen.getByRole("banner");
    expect(appHeader).toBeInTheDocument(AppHeader);
  });
});
