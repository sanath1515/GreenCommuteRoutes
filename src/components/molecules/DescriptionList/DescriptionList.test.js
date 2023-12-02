import React from 'react';
import DescriptionList from './DescriptionList'

import { cleanup,  render} from '@testing-library/react'

afterEach(cleanup)

describe('App', () => {
    
      test('check the Descption Card title', () => {
        const { asFragment} = render(<DescriptionList title = "title" text = {["High level of proficiency with leading UX Design software packages, such as Axure, Sketch, InVision, or Experience Design including the core Adobe Creative Suite products.","Excellent written and oral communication and presentation skills ","Excellent written and oral communication and presentation skills"]}/>);
          expect(asFragment('divinprofile')).toBeTruthy();
      })
  })


