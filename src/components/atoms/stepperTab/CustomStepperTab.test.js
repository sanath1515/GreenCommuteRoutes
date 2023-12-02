import React from "react";
import { render} from "@testing-library/react";
import HorizontalLinearStepper from "./CustomStepperTab";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<HorizontalLinearStepper step = {["Your Location"]}  />);
    expect(asFragment()).toMatchSnapshot();
  });

});
