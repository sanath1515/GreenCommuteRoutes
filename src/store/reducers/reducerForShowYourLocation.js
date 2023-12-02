import { SHOWYOURLOCATION, SAVEYOURLOCATION } from '../types'

const initialState = {
    currentLocation: '',

}

const ShowYourLocationReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWYOURLOCATION:
            return {
                currentLocation: action.location,
            };
        case SAVEYOURLOCATION:
            return {
                ...state, currentLocation: action.location,
            };

        default:
            return state;
    }
}

export default ShowYourLocationReducer;