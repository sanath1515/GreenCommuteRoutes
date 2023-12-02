import { render} from '@testing-library/react';
import ProfileItem from './ProfileItem';




describe('Typography Rendered', () => {
    test('divinprofileitem', () => {
      const { getByTestId } = render(<ProfileItem/>);
      expect(getByTestId('divinprofileitem')).toBeTruthy();
    });
  });