import { render} from '@testing-library/react';
import JobCard from './JobCardSmall';
import jobCardDetails from '../../Organism/RenderJobCard/jobCardDetails'




describe('Typography Rendered', () => {
  test('check the Descption Card title', () => {
      const { getByTestId } = render(<JobCard job = {jobCardDetails[0]}/>);
      expect(getByTestId('cardinjobcardsmall')).toBeTruthy();
  });
});