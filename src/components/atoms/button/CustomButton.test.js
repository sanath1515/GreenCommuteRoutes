import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Mybutton from './CustomButton'

describe("Button renders correctly", () => {
    test("should match snapshot", () => {
      const { asFragment } = render(<Mybutton />);
      expect(asFragment()).toMatchSnapshot();
    });
  
  });
  