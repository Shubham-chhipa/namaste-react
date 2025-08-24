import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Contact us component shoudl load", async () => {
  //Whenever you are tetsing a UI component in recat, you will have to render that component on to jsdom
  render(<Contact />); //Rendering JSX/component in jsdom

  //the rendered component will be rendered in screen
  //Qerying
  const heading = await screen.findByRole("heading");

  //Assertion
  expect(heading).toBeInTheDocument();
});
