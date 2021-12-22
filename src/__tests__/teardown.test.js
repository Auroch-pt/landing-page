import { act } from "@testing-library/react";
import { render, shallow } from "enzyme";
import { unmountComponentAtNode } from "react-dom";

import Footer from "../components/Footer/Footer";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(<Footer />, container);
  });
  expect(container.textContent).toBe("Footer");
});
