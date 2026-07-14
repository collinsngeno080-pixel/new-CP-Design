import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import App from "../App";

// Mock AOS to prevent initialization errors
vi.mock("aos", () => ({
  default: {
    init: vi.fn(),
    refresh: vi.fn(),
    refreshHard: vi.fn(),
  },
}));

describe("App", () => {
  it("renders without crashing", () => {
    // App contains its own BrowserRouter, so no wrapper needed
    render(<App />);
    // App should render successfully
    expect(document.body).toBeInTheDocument();
  });

  it("renders the skip link for accessibility", () => {
    render(<App />);
    const skipLink = document.querySelector('a[href="#main-content"]');
    expect(skipLink).toBeTruthy();
  });
});
