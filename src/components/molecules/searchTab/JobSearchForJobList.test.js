import { JobSearch } from "./jobSearch";
import { render} from '@testing-library/react';
import { JobSearchForJobList } from "./jobSearchForJobList";


describe('Typography Rendered', () => {
    test('check the Descption Card title', () => {
      const { asFragment} = render(<JobSearchForJobList/>);
        expect(asFragment()).toMatchSnapshot();
    });
    });