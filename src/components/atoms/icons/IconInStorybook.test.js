import React from "react";
import { render} from "@testing-library/react";
import IconInStorybook from "./IconInStorybook";

describe("checkbox renders correctly", () => {
  test("should match snapshot", () => {
    const { asFragment } = render(<IconInStorybook/>);
    expect(asFragment()).toMatchSnapshot();
  });

});
