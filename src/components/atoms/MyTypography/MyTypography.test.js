import { render, screen, cleanup } from '@testing-library/react';
import MyTypography from './MyTypography';


afterEach(cleanup)

describe('Typography Rendered', () => {
  test('Image should be rendered', () => {
    render(<MyTypography/>);
    const element = screen.getByTestId('typographyComponent')
    expect(element).toBeTruthy();
  });
});