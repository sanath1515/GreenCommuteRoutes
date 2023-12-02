import React from 'react';

import { cleanup, fireEvent, render, screen} from '@testing-library/react'
import FilterBox from './FilterBox';

afterEach(cleanup)

describe('App', () => {
    
      test('check the Descption Card title', () => {
        const { asFragment} = render(<FilterBox/>);
          expect(asFragment('divinprofile')).toBeTruthy();
      })
  })


