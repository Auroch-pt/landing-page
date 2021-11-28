import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders FreeDEV", () => {
  render(<Home />);
  const linkElement = screen.getByText(/FreeDEV/i);
  expect(linkElement).toBeInTheDocument();
});
