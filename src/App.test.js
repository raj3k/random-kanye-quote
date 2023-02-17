import { render, screen } from '@testing-library/react';
import { mockInitialFetch, mockNewQuoteFetch } from "./mocks/mockFetch";
import App from './App';
import userEvent from "@testing-library/user-event";

beforeEach(() => {
  jest.spyOn(window, "fetch").mockImplementation(mockInitialFetch);
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders the landing page', async () => {
  render(<App />);

  // eslint-disable-next-line testing-library/no-node-access
  const quoteContainer = document.getElementById('#quote')
  expect(await screen.findByText("Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth")).toBeInTheDocument(quoteContainer);
  expect(screen.getByRole("button", { name: "New Quote"})).toBeInTheDocument();
  expect(screen.getByText("by Kanye West")).toBeInTheDocument();
});

test("should be able to generate and display new quote by clicking on the button", async () => {
  render(<App />);

// eslint-disable-next-line testing-library/no-node-access
  const quoteContainer = document.getElementById('#quote')
  expect(await screen.findByText("Truth is my goal. Controversy is my gym. I'll do a hundred reps of controversy for a 6 pack of truth")).toBeInTheDocument(quoteContainer);

  // mocking new response
  jest.spyOn(window, "fetch").mockImplementation(mockNewQuoteFetch);

  // simulate generating the new quote
  const newQuoteBtn = screen.getByRole("button", { name: "New Quote" });
  userEvent.click(newQuoteBtn);

  // Verify generated text
  expect(await screen.findByText("There are people sleeping in parking lots")).toBeInTheDocument(quoteContainer);

});
