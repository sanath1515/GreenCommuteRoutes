import { render} from '@testing-library/react';
import MyListItem from './MyListItem';



describe('Typography Rendered', () => {
    test('listitemtextinlistitem', () => {
      const { asFragment} = render(<MyListItem/>);
      expect(asFragment()).toMatchSnapshot();
    });
  });