import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { useLocation } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../index";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn().mockImplementation(() => {
    return { pathname: "/some-path" };
   }),
}));

describe("Header component", () => {
  beforeAll(() => {
    window.getComputedStyle = jest.fn().mockImplementation((element) => ({
      ...element.style,
      backgroundColor: "rgb(23, 191, 221)",
    }));
  });

  afterAll(() => {
    delete window.getComputedStyle;
  });

  test("should render the Header component correctly", async () => {
    useLocation.mockReturnValue({ pathname: "/some-path" });

    render(<Header/>);

    const headerContainer = await waitFor(() =>
      screen.getByTestId("header-container")
    );

    expect(headerContainer).toBeInTheDocument();
    expect(window.getComputedStyle(headerContainer).backgroundColor).toBe(
      "rgb(23, 191, 221)"
    );
  });
});
