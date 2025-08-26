import { fireEvent, render, screen } from "@testing-library/react"; //fireEvent to fire an event
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  //all ways will work
  // const loginButton = screen.getByRole("button",);
  // const loginButton = screen.getByText("Login") //aboid by text thats not beter way by role is better if you cant getby role then get by text
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Should load Header component with cart items 0 button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  // const cartItem = screen.getByText("Cart(0)"); //writing the eaxct text
  const cartItem = screen.getByText(/Cart/); //writing regular expression

  expect(cartItem).toBeInTheDocument;
});

it("Should chaneg login button to logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton); //to fire an event: click

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument;
});
