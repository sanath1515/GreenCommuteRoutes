import { render, cleanup } from '@testing-library/react';
import CustomTextField from './CustomTextField';


afterEach(cleanup)

describe('CustomTextField Rendered', () => {
  test('CustomTextField should be rendered', () => {
    const { asFragment} = render(<CustomTextField locationPlaceholder = "Search Jobs"/>);
        expect(asFragment()).toMatchSnapshot();
  });
});