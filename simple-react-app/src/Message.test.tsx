import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Message from "./Message";

test("renders the message", () => {
  render(<Message />);
  expect(screen.getByTestId("message")).toHaveTextContent("Hello, World!");
});

test("changes message on button click", () => {
  render(<Message />);
  fireEvent.click(screen.getByText("Click Me"));
  expect(screen.getByTestId("message")).toHaveTextContent("Button Clicked!");
});
