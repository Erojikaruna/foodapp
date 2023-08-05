import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test("Should load RestaurantMenu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <Cart />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Jain Friendly (3)");
  fireEvent.click(accordionHeader);

  const fooditems = screen.getAllByTestId("fooditems");
  expect(fooditems.length).toBe(3);

  const addBtns = screen.getAllByRole("button", { name: "ADD +" });

  fireEvent.click(addBtns[0]);

  expect(screen.getByTestId("cart")).toBeInTheDocument();

  expect(screen.getAllByTestId("fooditems").length).toBe(4);

  fireEvent.click(screen.getByRole("button", { name: "Cleart Cart" }));

  expect(screen.getAllByTestId("fooditems").length).toBe(3);

  expect(screen.getByText("Your 🛒 Cart is empty!")).toBeInTheDocument();
});
