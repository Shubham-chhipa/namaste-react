import Contact from "../Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; //we import this to make the methods on expect(something). to work

describe("contact Us page test case", () => {
  //Used to group testcases
  test("Should load Contact us component ", async () => {
    //Whenever you are tetsing a UI component in recat, you will have to render that component on to jsdom
    render(<Contact />); //Rendering JSX/component in jsdom

    //the rendered component will be rendered in screen
    //Qerying
    const heading = await screen.findByRole("heading"); //this is an async function so it returns a promise //roles are given to html elements by react testing library
    // console.log(heading); //When we do a console.log after querying we get a JSX element(React element/JS object/Virtual DOM)

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside Contact component", async () => {
    //we can use test or it keyword both do the same defines 1 test case
    render(<Contact />);
    const button = await screen.findByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact component", async () => {
    render(<Contact />);
    const inputName = await screen.findByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside Contact component", async () => {
    render(<Contact />);
    const inputBoxes = await screen.getAllByRole("textbox");
    // expect(inputBoxes).toBeInTheDocument(); // this line wont work coz: the matcher toBeInTheDocument() expects a single element, not an array — hence the error: Received value must be an HTMLElement or SVGElement. Received has type: array
    // console.log(inputBoxes); //array
    expect(inputBoxes.length).toBe(2);
  });
});
