import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";

afterEach(rtl.cleanup);

test("App renders without crashing", () => {
  rtl.render(<App />);
});

test("Display renders without crashing", () => {
  rtl.render(<Display />);
});

test('renders "Chicago Cubs" text', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/chicago cubs/i));
});

test("Dashboard renders without crashing", () => {
  rtl.render(<Dashboard />);
});
