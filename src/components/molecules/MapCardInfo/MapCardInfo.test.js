import { render } from '@testing-library/react';
import JobCardInfo from './MapCardInfo';




describe('Typography Rendered', () => {
    test('maingridinmapcard', () => {
      const { asFragment} = render(<JobCardInfo mapImageSrc='https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/d8a90ae4-9dc9-4d82-aed1-f9e36cd74089-2x.png' 
        srcLocation = "East Marredpally Secunderabad" destLocation="Hitech City"/>);
      expect(asFragment()).toMatchSnapshot();
    });
  });