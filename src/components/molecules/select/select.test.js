import { render } from '@testing-library/react';
import CustomizedHook from "./select";


describe('Typography Rendered', () => {
    test('check the Descption Card title', () => {
      const { asFragment} = render(<CustomizedHook/>);
        expect(asFragment()).toMatchSnapshot();
    });
    });