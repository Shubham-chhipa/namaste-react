import RestaurantCard from "../../RestaurantCard";
import MOCK_DATA from "../../mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

const { render, screen } = require("@testing-library/react");

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});

//Add test case for higher order compoent too
