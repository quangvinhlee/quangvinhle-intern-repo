import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import DataFetcher from "./DataFetcher";

// Mock the fetchData module
jest.mock("./api", () => ({
  fetchData: jest.fn(() => Promise.resolve("Mocked API Data")),
}));

test("displays data from mocked API call", async () => {
  render(<DataFetcher />);
  expect(screen.getByTestId("api-data")).toHaveTextContent("Loading...");
  await waitFor(() => {
    expect(screen.getByTestId("api-data")).toHaveTextContent("Mocked API Data");
  });
});
