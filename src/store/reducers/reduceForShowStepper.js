import { SHOWSTEPPER, INCREMENTSTEPPER, stepNext, stepBack } from '../types'

const initialState = {
    activeStepper: 0,

}

const ShowStepperReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWSTEPPER:
            return {
                activeStepper: action.stepper,
            };
        case INCREMENTSTEPPER: {
            return {
                activeStepper: action.stepper + 1,
            };
        }
        case stepNext:
            return {
                ...state, activeStepper: action.stepper + 1,
            }
        case stepBack:
            return {
                ...state, activeStepper: action.stepper - 1,
            }
        default:
            return state;
    }
}

export default ShowStepperReducer;