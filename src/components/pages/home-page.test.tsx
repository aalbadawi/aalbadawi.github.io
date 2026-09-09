import "jest";
import "jest-canvas-mock";
import "@testing-library/jest-dom";

import { render } from "@testing-library/react";
import HomePage from "@/components/pages/home-page";

describe("HomePage", () => {
  it("renders HomePage without crashing", () => {
    const { container } = render(<HomePage />);
    expect(container).toBeInTheDocument();
  });
});

