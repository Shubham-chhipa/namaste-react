import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../../RestaurantMenu";
import { act } from "react";
import MOCK_DATA from "../../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

//we can render multiple components together in JSDOM as needed for testing
it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const recommendedMenu = await screen.findByText(/Recommended/);

  expect(recommendedMenu).toBeInTheDocument();

  const menuItems = await screen.findAllByTestId("menuItem"); //251 items

  expect(menuItems.length).toBe(251);

  const addBtns = await screen.findAllByRole("button", { name: "ADD" });
  //   console.log(addBtns.length);

  fireEvent.click(addBtns[0]);

  const cartOneItem = screen.getByText("Cart(1)");

  expect(cartOneItem).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart(2)")).toBeInTheDocument(); //Adding 2nd item in cart

  const itemsOnCart = await screen.findAllByTestId("menuItem"); //itemCards not acyually items in cart its total items in the JSDOM

  expect(itemsOnCart.length).toBe(253); //total menuitems = restaurantMenu(251) + cartItems(2)

  const clearaCartBtn = screen.getByRole("button", { name: "Clear Cart" });

  fireEvent.click(clearaCartBtn);

  expect(screen.getAllByTestId("menuItem").length).toBe(251); //Checked that 2 items in cart is subtracted from total items after clicking clear cart

  expect(screen.getByText("Cart(0)")).toBeInTheDocument(); //checked Cart items in header
});
//For optimized way of breaking this whole test inti smal test cases refer notes.txt
