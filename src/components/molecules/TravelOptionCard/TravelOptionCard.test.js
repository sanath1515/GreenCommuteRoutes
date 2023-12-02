import { render, cleanup } from '@testing-library/react';
import TravelOptionCard from './TravelOptionCard';


afterEach(cleanup)

describe('TravelOption Rendered', () => {
  test( "maindivintravelinfocard" , () => {
    const { asFragment } = render(<TravelOptionCard imageSrc="images/map.png" cabServiceName = "Maddhapur" costEstimation = "20"/>);
        expect(asFragment()).toMatchSnapshot();
  });
});