import { render, screen, cleanup } from '@testing-library/react';
import JobCardInfo from './JobCardInfo';





describe('Typography Rendered', () => {
    test('cardinjobcard', () => {
      const { asFragment} = render(<JobCardInfo positionAppliedName="Manager" companyName = "Zemoso" locationName = "Hyd" imageSrc='https://logosvector.net/wp-content/uploads/2016/05/hp-logo-vector-download.jpg'/>);
      expect(asFragment()).toMatchSnapshot();
    });
    
  });