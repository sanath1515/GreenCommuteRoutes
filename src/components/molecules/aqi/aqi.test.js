import { cleanup, render, screen } from '@testing-library/react';
import AQI from './aqi';


afterEach(cleanup)


describe('Aqi Shower', () => {
    test('Show AQI', () =>{
        const { getByTestId } = render(<AQI />)
        expect(getByTestId('aqishower')).toBeTruthy();
    });
    test('check the image ', () => {
        const {getByTestId}=render(<AQI  imgPath= "https://cdn.zeplin.io/5fa28fcbff79c58958e4e1a6/assets/ae5e266d-f03e-4732-af5b-a8ebdac94494.svg"/>)
        expect(getByTestId('aqiimage')).toBeTruthy();
    });
    test('check the aqitext showing count', () => {
        render(<AQI count={0} isNumber = {2} isNumberTag = {2} />);
        const element = screen.getByTestId('aqitext showing count')
        expect(element).toBeTruthy();
    });
    test('check the aqitext showing value', () => {
        const { asFragment} = render(<AQI isNumberTag = {false} />);
        expect(asFragment()).toMatchSnapshot();
    });
    
})