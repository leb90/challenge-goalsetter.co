import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../index";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../../../assets/images/mobile.png", () => "mocked-image-path");

test("should render the Home component", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>
  );

  const mobileImage = screen.getByAltText("Mobile");
  const title = screen.getByText("The money app for the whole family");
  const subtitle = screen.getByText(
    "Save easily. Spend smartly. Learn money. Earn money."
  );

  expect(mobileImage).toBeInTheDocument();
  expect(title).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
});
test("should display Log In button", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>
  );

  const loginButton = screen.getByText("Log In");
  expect(loginButton).toBeInTheDocument();
});

test("should display Sign Up button", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Home />
    </MemoryRouter>
  );

  const signupButton = screen.getByText("Sign Up");
  expect(signupButton).toBeInTheDocument();
});
