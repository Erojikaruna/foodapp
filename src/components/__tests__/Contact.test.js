import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// decsribe block uses for grouping test cases

/* beforeAll(() => {
  console.log("Before All");
});

beforeEach(() => {
  console.log("Before Each");
});

afterAll(() => {
  console.log("After All");
});

afterEach(() => {
  console.log("After Each");
}); */

describe("Contact Us Page Test Case", () => {
  //instead of test we can use "it"
  it("Should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact us component", () => {
    render(<Contact />);

    const input = screen.getByPlaceholderText("enter your name");

    expect(input).toBeInTheDocument();
  });
});
