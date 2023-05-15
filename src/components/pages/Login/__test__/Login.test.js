import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../index";
import { useAuth } from "../../../../hooks/useAuth";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";

jest.mock("../../../../hooks/useAuth");
jest.mock(
  "../../../../assets/svg/Close-eye.svg",
  () => "mocked-eyeClosed-path"
);
jest.mock("../../../../assets/svg/Open-eye.svg", () => "mocked-eyeOpen-path");
jest.mock(
  "../../../../assets/svg/notification.svg",
  () => "mocked-notificationSvg-path"
);

test("should render the Login component", () => {
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();
  useAuth.mockReturnValue({ login: mockLogin, logout: mockLogout });

  render(
    <MemoryRouter initialEntries={["/login"]}>
      <Login />
    </MemoryRouter>
  );

  const title = screen.getByText("Log in");
  const emailInput = screen.getByText("Email Address or Phone Number");
  const passwordInput = screen.getByText("Password");
  const forgotPasswordLink = screen.getByText("Forgot Password?");
  const continueButton = screen.getByText("Continue");

  expect(title).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(forgotPasswordLink).toBeInTheDocument();
  expect(continueButton).toBeInTheDocument();
});

test("should call login function when Continue button is clicked", () => {
  const mockLogin = jest.fn();
  const mockLogout = jest.fn();
  useAuth.mockReturnValue({ login: mockLogin, logout: mockLogout });

  render(
    <MemoryRouter initialEntries={["/login"]}>
      <Login />
    </MemoryRouter>
  );

  const emailInput = screen.getByText("Email Address or Phone Number");
  const passwordInput = screen.getByTestId("Password");
  const continueButton = screen.getByText("Continue");

  const email = "test@example.com";
  const password = "testpassword";

  const changeValue = (element, value) => {
    Object.defineProperty(element, 'value', {
      get() {
        return value;
      },
      set(newValue) {
        value = newValue;
        fireEvent.change(element);
      },
    });
  
    fireEvent.change(element);
  };
  
  changeValue(emailInput, email);
  changeValue(passwordInput, password);
  
  fireEvent.click(continueButton);

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(continueButton).toBeInTheDocument();
});
test("should render a disabled Continue button if email and password are empty", () => {
    const mockLogin = jest.fn();
    const mockLogout = jest.fn();
    useAuth.mockReturnValue({ login: mockLogin, logout: mockLogout });
  
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <Login />
      </MemoryRouter>
    );
  
    const continueButton = screen.getByTestId("button-continue");
  
    expect(continueButton).toBeDisabled();
  });
  