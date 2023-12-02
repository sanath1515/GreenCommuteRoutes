import { SHOWPAGE } from '../types'

const initialState = {
    pageToBeDisplayed: "PAGE2",
}

const showPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWPAGE:
            return {
                pageToBeDisplayed: action.page,
            };
        default:
            return state;
    }
}

export default showPageReducer;