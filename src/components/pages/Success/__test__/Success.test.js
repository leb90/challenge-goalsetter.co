import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Success from "../index";
import "@testing-library/jest-dom";

jest.mock("../../../../hooks/useAuth");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

test("should redirect to home when there is no token", () => {
  const mockNavigate = jest.fn();
  const mockLocalStorage = {
    getItem: jest.fn(),
  };

  useNavigate.mockReturnValue(mockNavigate);

  Object.defineProperty(window, "localStorage", {
    value: mockLocalStorage,
  });

  jest.spyOn(React, "useEffect").mockImplementation((effect) => effect());

  render(
    <MemoryRouter initialEntries={["/success"]}>
      <Success />
    </MemoryRouter>
  );

  expect(mockLocalStorage.getItem).toHaveBeenCalledWith("token");
  expect(mockNavigate).toHaveBeenCalledWith("/");
});

test("should render the Success component", () => {
  render(
    <MemoryRouter>
      <Success />
    </MemoryRouter>
  );

  const title = screen.getByText("Thank you for choosing Goalsetter");
  const text = screen.getByText(
    "At the moment, your account can only be used in the app. Sorry for the inconvenience."
  );
  const button = screen.getByText("Download the app");

  expect(title).toBeInTheDocument();
  expect(text).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
