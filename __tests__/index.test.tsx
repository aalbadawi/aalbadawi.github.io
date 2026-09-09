import "jest";
import "jest-canvas-mock";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";

import App from "@/app/page";

describe("App", () => {
  it("renders without crashing", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});

