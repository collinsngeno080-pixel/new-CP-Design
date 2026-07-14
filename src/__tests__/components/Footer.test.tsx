import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import { Footer } from "../../components/Footer";

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe("Footer", () => {
  it("renders footer element", () => {
    renderWithRouter(<Footer />);
    const footer = document.querySelector("footer");
    expect(footer).toBeTruthy();
  });

  it("contains links and buttons", () => {
    renderWithRouter(<Footer />);
    const interactiveElements = document.querySelectorAll("a, button");
    expect(interactiveElements.length).toBeGreaterThan(0);
  });

  it("displays company name", () => {
    renderWithRouter(<Footer />);
    const heading = screen.getByRole("heading", { name: /College Produce/i });
    expect(heading).toBeInTheDocument();
  });
});
