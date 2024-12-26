import "jest";
import "jest-canvas-mock";
import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import App from "@/app/page";

describe("App", () => {
  it("renders a heading", () => {
    render(<App />);

    // Using screen to find the heading
    const heading = screen.getByRole("heading", { name: /Amer Albadawi/i });
    expect(heading).toBeInTheDocument(); // Assertion to check if heading is rendered
  });
});
