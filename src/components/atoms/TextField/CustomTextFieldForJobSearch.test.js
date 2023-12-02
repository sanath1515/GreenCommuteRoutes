import React from "react";
import { render} from "@testing-library/react";
import CustomTextFieldForJobSearch from "./CustomTextFieldForJobSearch";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<CustomTextFieldForJobSearch placeholder = "sachin"/>);
    expect(asFragment()).toMatchSnapshot();
  });

});
