import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";

// Cleanup between tests and the jest-dom matchers come from vitest.setup.ts.

test("renders the greeting heading", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: /portfolio is still hatching/i,
    }),
  ).toBeInTheDocument();
});

test("renders the hatching chick with an accessible label", () => {
  render(<Home />);
  expect(
    screen.getByRole("img", { name: "Hatching chick" }),
  ).toBeInTheDocument();
});
