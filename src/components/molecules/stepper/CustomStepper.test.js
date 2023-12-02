import { render, screen } from '@testing-library/react';
import HorizontalLinearStepper from './CustomStepper';
describe('Typography Rendered', () => {
    test('maindivincustomstepper', () => {
      render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
      const element = screen.getByTestId('maindivincustomstepper')
      expect(element).toBeTruthy();
    });
    test('stepperincustomstepper', () => {
      render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
      const element = screen.getByTestId('stepperincustomstepper')
      expect(element).toBeTruthy();
    });
   
    test('div2customstepper', () => {
      render(<HorizontalLinearStepper steps= {['Your Location', 'Job Location', 'Your Skills']}/>);
      const element = screen.getByTestId('div2customstepper')
      expect(element).toBeTruthy();
    });
   
  });