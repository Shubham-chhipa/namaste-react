//INTEGRATION TEST
import Body from "../../Body";
import MOCK_DATA from "../../mocks/mockResListData.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

import { render, screen, fireEvent } from "@testing-library/react";

//simulating our mock fetch api given by browser// replacing the fetch api with our mock fetch
global.fetch = jest.fn(() => {
  //jest.fn() gives you a mock function which will be similar to our fetch api
  //global is a global object wherever our compoennets are being loaded
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA); //// Mock_Data will be returned in the end from the fetch function
    },
  });
});

it("Should search restaurant list for burger text input", async () => {
  //When we use the async operation(state update) in a component, then we should wrap our component(render function) inside act function. It will return a promise
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  ); //act function returns a promise and it takes an async callback function which renders the component

  const cardsBeforeSearch = await screen.findAllByTestId("resCard"); //we give testid to HTML element to identify it if no other methods are useful to find it

  expect(cardsBeforeSearch.length).toBe(8);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const inputSearch = screen.getByTestId("searchInput");

  fireEvent.change(inputSearch, { target: { value: "burger" } }), //second argument : object simulating/mimicking the e object which is given by browsers
    fireEvent.click(searchBtn);

  const cardsafterSearch = await screen.findAllByTestId("resCard");

  expect(cardsafterSearch.length).toBeLessThan(5);
});

it("Should filter top rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );
  const cardsBeforeSearch = await screen.findAllByTestId("resCard"); //we give testid to HTML element to identify it if no other methods are useful to find it

  expect(cardsBeforeSearch.length).toBe(8);

  const topRatedResBtn = await screen.findByRole("button", {
    name: "Top rated restaurants",
  });

  fireEvent.click(topRatedResBtn);

  const cardsafterSearch = await screen.findAllByTestId("resCard");
  //   console.log(cardsafterSearch.length);
  expect(cardsafterSearch.length).toBe(8); //curently all the restaurants have rating > 4
});
