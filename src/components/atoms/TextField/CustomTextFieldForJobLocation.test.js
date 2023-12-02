import React from "react";
import { render } from "@testing-library/react";
import CustomTextFieldForJobLocation from "./CustomTextFieldForJobLocation";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<CustomTextFieldForJobLocation placeholder = "sachin"/>);
    expect(asFragment()).toMatchSnapshot();
  });

});
