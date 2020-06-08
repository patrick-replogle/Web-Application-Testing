import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import { addBall, addStrike, addFoul, addHit } from "./components/functions";

afterEach(rtl.cleanup);

test("App renders without crashing", () => {
  rtl.render(<App />);
});

test("App is a thing", () => {
  const n = <App />;
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeFalsy();
});

test("Display renders without crashing", () => {
  rtl.render(<Display />);
});

test('renders "Chicago Cubs" text', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/chicago cubs/i));
});

test('renders "Balls" text', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/balls/i));
});

test('renders "Strikes" text', () => {
  const wrapper = rtl.render(<App />);

  expect(wrapper.getByText(/strikes/i));
});

test("Dashboard renders without crashing", () => {
  rtl.render(<Dashboard />);
});

test("addball works", () => {
  expect(addBall(0)).toBe(1);
  expect(addBall(3)).toBe(4);
});

test("addstrike works", () => {
  expect(addStrike(0)).toBe(1);
});

test("addFoul works", () => {
  expect(addFoul(0)).toBe(1);
});

test("addBall works", () => {
  expect(addBall(0)).toBe(1);
});
