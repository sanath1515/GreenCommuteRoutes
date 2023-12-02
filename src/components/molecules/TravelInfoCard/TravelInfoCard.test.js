import { render,  cleanup } from '@testing-library/react';
import TravelInfoCard  from './TravelInfoCard';




afterEach(cleanup)

describe('Travelinfocard Rendered', () => {
  test( "maindivintravelinfocard" , () => {
    const { asFragment } = render(<TravelInfoCard mapImageSrc="images/map.png" srcLocation = "Maddhapur" destLocation = "hitechcity"/>);
        expect(asFragment()).toMatchSnapshot();
  });
});