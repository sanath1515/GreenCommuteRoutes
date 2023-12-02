import { render, screen, cleanup } from '@testing-library/react';
import LocationListItem from './LocationListItem';



describe('Typography Rendered', () => {
   
    test('check the Descption Card title', () => {
      const { asFragment} = render(<LocationListItem locationName="hyd"/>);
        expect(asFragment()).toMatchSnapshot();
    });
  });