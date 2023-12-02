import { SHOWJOBLOCATION } from '../types'

const defaultLocation = [

]
const initialState = {
    jobLocation: defaultLocation

}

const ShowJobLocationReducer = (state = initialState, action) => {

    switch (action.type) {
        case SHOWJOBLOCATION:
            return {
                jobLocation: action.location
            }
        default:
            return state;
    }
}

export default ShowJobLocationReducer;