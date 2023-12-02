


import { cleanup, render } from '@testing-library/react';
import MyImage from './MyImage';


afterEach(cleanup)

describe('Logo', () => {
  test('Image must have src = "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg" ', () => {
    const { getByTestId } = render(<MyImage src = "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg"/>);
    expect(getByTestId('image')).toBeTruthy();
  });
});
















